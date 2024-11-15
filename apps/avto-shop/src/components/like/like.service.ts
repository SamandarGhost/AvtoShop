import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Like, MeLiked } from '../../libs/dto/like/like';
import { LikeInput } from '../../libs/dto/like/like.input';
import { T } from '../../libs/types/common';
import { Message } from '../../libs/enums/common.enum';
import { OrdinaryInquiry } from '../../libs/dto/car/car.input';
import { Cars } from '../../libs/dto/car/car';
import { LikeGroup } from '../../libs/enums/like.enum';
import { lookupFavoriteCar, lookupFavoriteDealer, lookupFavoriteProduct, lookupFavoriteService } from '../../libs/config';
import { Products } from '../../libs/dto/product/product';
import { Dealers } from '../../libs/dto/dealer/dealer';
import { CarServices } from '../../libs/dto/car-service.ts/car-service';

@Injectable()
export class LikeService {
    constructor(@InjectModel('Like') private readonly likeModel: Model<Like>) { }

    public async toggleLike(input: LikeInput): Promise<number> {
        const search: T = { memberId: input.memberId, likeRefId: input.likeRefId } = input,
            exist = await this.likeModel.findOne(search).exec();
        let modifier = 1;
        if (exist) {
            await this.likeModel.findOneAndDelete(search).exec();
            modifier = -1;
        } else {
            try {
                await this.likeModel.create(input);
            } catch (err) {
                console.log("Error: ServiceLike.model", err.message);
                throw new InternalServerErrorException(Message.CREATE_FAILED);
            }
        }
        console.log(`-LikeModifier- ${modifier}-`)
        return modifier;
    }


    public async checkLikeExistence(input): Promise<MeLiked[]> {
        const { memberId, likeRefId } = input;
        const result = await this.likeModel.findOne({ memberId: memberId, likeRefId: likeRefId }).exec();
        return result ? [{ memberId: memberId, likeRefId: likeRefId, myFavorite: true }] : []
    }


    public async getFavoriteCars(memberId: ObjectId, input: OrdinaryInquiry): Promise<Cars> {
        const { page, limit } = input;
        const match: T = { likeGroup: LikeGroup.CAR, memberId: memberId };

        const data: T = await this.likeModel.aggregate([
            { $match: match },
            { $sort: { updatedAt: -1 } },
            {
                $lookup: {
                    from: 'cars',
                    localField: 'likeRefId',
                    foreignField: '_id',
                    as: 'favoriteCar'
                },
            },
            { $unwind: '$favoriteCar' },
            {
                $facet: {
                    list: [
                        { $skip: (page - 1) * limit },
                        { $limit: limit },
                        lookupFavoriteCar,
                        { $unwind: '$favoriteCar.memberData' }
                    ],
                    metaCounter: [{ $count: 'total' }],
                }
            }
        ]).exec();
        const result: Cars = { list: [], metaCounter: data[0].metaCounter };
        result.list = data[0].list.map((ele) => ele.favoriteCar);
        return result;
    }

    public async getFavoriteProducts(memberId: ObjectId, input: OrdinaryInquiry): Promise<Products> {
        const { page, limit } = input;
        const match: T = { likeGroup: LikeGroup.PRODUCT, memberId: memberId };

        const data: T = await this.likeModel.aggregate([
            { $match: match },
            { $sort: { updatedAt: -1 } },
            {
                $lookup: {
                    from: 'products',
                    localField: 'likeRefId',
                    foreignField: '_id',
                    as: 'favoriteProduct'
                },
            },
            { $unwind: '$favoriteProduct' },
            {
                $facet: {
                    list: [
                        { $skip: (page - 1) * limit },
                        { $limit: limit },
                        lookupFavoriteProduct,
                        { $unwind: '$favoriteProduct.memberData' }
                    ],
                    metaCounter: [{ $count: 'total' }],
                }
            }
        ]).exec();
        const result: Products = { list: [], metaCounter: data[0].metaCounter };
        result.list = data[0].list.map((ele) => ele.favoriteProduct);
        return result;
    }

    public async getFavoriteDealers(memberId: ObjectId, input: OrdinaryInquiry): Promise<Dealers> {
        const { page, limit } = input;
        const match: T = { likeGroup: LikeGroup.DEALER, memberId: memberId };

        const data: T = await this.likeModel.aggregate([
            { $match: match },
            { $sort: { updatedAt: -1 } },
            {
                $lookup: {
                    from: 'dealers',
                    localField: 'likeRefId',
                    foreignField: '_id',
                    as: 'favoriteDealer'
                },
            },
            { $unwind: '$favoriteDealer' },
            {
                $facet: {
                    list: [
                        { $skip: (page - 1) * limit },
                        { $limit: limit },
                        lookupFavoriteDealer,
                        { $unwind: '$favoriteDealer.memberData' }
                    ],
                    metaCounter: [{ $count: 'total' }],
                }
            }
        ]).exec();
        const result: Dealers = { list: [], metaCounter: data[0].metaCounter };
        result.list = data[0].list.map((ele) => ele.favoriteDealer);
        return result;
    }

    public async getFavoriteServices(memberId: ObjectId, input: OrdinaryInquiry): Promise<CarServices> {
        const { page, limit } = input;
        const match: T = { likeGroup: LikeGroup.CAR_SERVICE, memberId: memberId };

        const data: T = await this.likeModel.aggregate([
            { $match: match },
            { $sort: { updatedAt: -1 } },
            {
                $lookup: {
                    from: 'carservices',
                    localField: 'likeRefId',
                    foreignField: '_id',
                    as: 'favoriteService'
                },
            },
            { $unwind: '$favoriteService' },
            {
                $facet: {
                    list: [
                        { $skip: (page - 1) * limit },
                        { $limit: limit },
                        lookupFavoriteService,
                        { $unwind: '$favoriteService.memberData' }
                    ],
                    metaCounter: [{ $count: 'total' }],
                }
            }
        ]).exec();
        const result: CarServices = { list: [], metaCounter: data[0].metaCounter };
        result.list = data[0].list.map((ele) => ele.favoriteService);
        return result;
    }
}
