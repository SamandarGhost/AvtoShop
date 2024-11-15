import { Injectable } from '@nestjs/common';
import { lookupVisitedCar, lookupVisitedDealer, lookupVisitedProduct } from '../../libs/config';
import { Cars } from '../../libs/dto/car/car';
import { ViewGroup } from '../../libs/enums/view.enum';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { View } from '../../libs/dto/view/view';
import { ViewInput } from '../../libs/dto/view/view.input';
import { OrdinaryInquiry } from '../../libs/dto/car/car.input';
import { T } from '../../libs/types/common';
import { Products } from '../../libs/dto/product/product';
import { Dealers } from '../../libs/dto/dealer/dealer';

@Injectable()
export class ViewService {
    constructor(@InjectModel('View') private readonly viewModel: Model<View>) { }

    public async recordView(input: ViewInput): Promise<View | null> {
        const viewExist = await this.checkViewexistence(input);
        if (!viewExist) {
            console.log('- New view Insert -');
            return await this.viewModel.create(input);
        } else return null;
    }

    private async checkViewexistence(input: ViewInput): Promise<View> {
        const { memberId, viewRefId } = input;
        const search: T = {
            memberId: memberId, viewRefId: viewRefId
        };
        return await this.viewModel.findOne(search).exec();
    }

    public async getVisitedCars(memberId: ObjectId, input: OrdinaryInquiry): Promise<Cars> {
        const { page, limit } = input;
        const match: T = { viewGroup: ViewGroup.CAR, memberId: memberId };

        const data: T = await this.viewModel.aggregate([
            { $match: match },
            { $sort: { updatedAt: -1 } },
            {
                $lookup: {
                    from: 'cars',
                    localField: 'viewRefId',
                    foreignField: '_id',
                    as: 'visitedCar'
                },
            },
            { $unwind: '$visitedCar' },
            {
                $facet: {
                    list: [
                        { $skip: (page - 1) * limit },
                        { $limit: limit },
                        lookupVisitedCar,
                        { $unwind: '$visitedCar.memberData' }
                    ],
                    metaCounter: [{ $count: 'total' }],
                }
            }
        ]).exec();
        const result: Cars = { list: [], metaCounter: data[0].metaCounter };
        result.list = data[0].list.map((ele) => ele.visitedCar);
        return result;
    }

    public async getVisitedProducts(memberId: ObjectId, input: OrdinaryInquiry): Promise<Products> {
        const { page, limit } = input;
        const match: T = { viewGroup: ViewGroup.PRODUCT, memberId: memberId };

        const data: T = await this.viewModel.aggregate([
            { $match: match },
            { $sort: { updatedAt: -1 } },
            {
                $lookup: {
                    from: 'products',
                    localField: 'viewRefId',
                    foreignField: '_id',
                    as: 'visitedProduct'
                },
            },
            { $unwind: '$visitedProduct' },
            {
                $facet: {
                    list: [
                        { $skip: (page - 1) * limit },
                        { $limit: limit },
                        lookupVisitedProduct,
                        { $unwind: '$visitedProduct.memberData' }
                    ],
                    metaCounter: [{ $count: 'total' }],
                }
            }
        ]).exec();
        const result: Products = { list: [], metaCounter: data[0].metaCounter };
        result.list = data[0].list.map((ele) => ele.visitedProduct);
        return result;
    }

    public async getVisitedDealer(memberId: ObjectId, input: OrdinaryInquiry): Promise<Dealers> {
        const { page, limit } = input;
        const match: T = { viewGroup: ViewGroup.DEALER, memberId: memberId };

        const data: T = await this.viewModel.aggregate([
            { $match: match },
            { $sort: { updatedAt: -1 } },
            {
                $lookup: {
                    from: 'dealers',
                    localField: 'viewRefId',
                    foreignField: '_id',
                    as: 'visitedDealer'
                },
            },
            { $unwind: '$visitedDealer' },
            {
                $facet: {
                    list: [
                        { $skip: (page - 1) * limit },
                        { $limit: limit },
                        lookupVisitedDealer,
                        { $unwind: '$visitedDealer.memberData' }
                    ],
                    metaCounter: [{ $count: 'total' }],
                }
            }
        ]).exec();
        const result: Dealers = { list: [], metaCounter: data[0].metaCounter };
        result.list = data[0].list.map((ele) => ele.visitedDealer);
        return result;
    }
}
