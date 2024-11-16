import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { View } from '../../libs/dto/view/view';
import { ViewInput } from '../../libs/dto/view/view.input';
import { OrdinaryInquiry } from '../../libs/dto/car/car.input';
import { ITEMS, T } from '../../libs/types/common';
import { lookupVisited } from '../../libs/config';

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

    public async getVisited(memberId: ObjectId, input: OrdinaryInquiry): Promise<ITEMS> {
        const { page, limit } = input;
        const match: T = { likeGroup: { $in: ['CAR', 'PRODUCT'] }, memberId: memberId };

        const data: T = await this.viewModel.aggregate([
            { $match: match },
            { $sort: { updatedAt: -1 } },
            {
                $lookup: {
                    from: 'cars',
                    localField: 'likeRefId',
                    foreignField: '_id',
                    as: 'visitedItems',
                },
            },
            {
                $lookup: {
                    from: 'products',
                    localField: 'likeRefId',
                    foreignField: '_id',
                    as: 'visitedItems',
                }
            },
            {
                $project: {
                    visitedItems: {
                        $cond: {
                            if: { $eq: [{ $type: '$visitedItems' }, 'array'] },
                            then: '$visitedItems',
                            else: []
                        }
                    },
                },
            },
            { $unwind: '$visitedItems' },
            {
                $facet: {
                    list: [
                        { $skip: (page - 1) * limit },
                        { $limit: limit },
                        lookupVisited,
                        { $unwind: '$visitedItems.memberData' }
                    ],
                    metaCounter: [{ $count: 'total' }],
                },
            },
        ]).exec();


        const result: ITEMS = { list: [], metaCounter: data[0].metaCounter };
        result.list = data[0].list.map((ele) => ele.visitedItems);
        return result;
    }

}
