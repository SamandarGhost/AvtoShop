import { ObjectId } from 'bson';

export const availableAgentSorts = ['createdAt', 'updatedAt', 'memberLikes', 'memberViews', 'memberRank'];
export const availableMemberSorts = ['createdAt', 'updatedAt', 'memberLikes', 'memberViews'];
export const availableDealerSorts = ['createdAt', 'dealerLikes', 'dealerViews', 'dealerRank', 'dealerBrand', 'dealerLocation'];
export const availableProductSorts = ['createdAt', 'updatedAt', 'productViews', 'productLikes'];
export const availableCarServiceSorts = ['createdAt', 'carServiceType', 'carServcieLocation', 'carService'];

export const availableOptions = ['carBarter', 'carRent'];
export const availableCarSorts = [
    'createdAt',
    'updatedAt',
    'carLikes',
    'carViews',
    'carRank',
    'carPrice',
];

export const availableArticleSorts = ['createdAt', 'updatedAt', 'articleLikes', 'articleViews'];
export const availableCommentSorts = ['createdAt', 'updatedAt'];

/** IMAGE CONFIGURATION **/
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';
import { T } from './types/common';

export const validMimeTypes = ['image/png', 'image/jpg', 'image/jpeg'];
export const getSerialForImage = (filename: string) => {
    const ext = path.parse(filename).ext;
    return uuidv4() + ext;
};

export const shapeIntoMongoObjectId = (target: any) => {
    return typeof target === 'string' ? new ObjectId(target) : target;
};
export const lookupAuthMemberLiked = (memberId: T, targetRefId: string = '$_id') => {
    return {
        $lookup: {
            from: 'likes',
            let: {
                localLikeRefId: targetRefId,
                localMemberId: memberId,
                localMyFavourite: true
            },
            pipeline: [
                {
                    $match: {
                        $expr: {
                            $and: [
                                { $eq: ['$likeRefId', '$$localLikeRefId'] }, { $eq: ['$memberId', '$$localMemberId'] }
                            ],
                        },
                    },
                },
                {
                    $project: {
                        _id: 0,
                        memberId: 1,
                        likeRefId: 1,
                        myFavorite: '$$localMyFavourite',
                    },
                },
            ],
            as: 'meLiked',
        },
    };
};

interface LookupAuthMemberFollowed {
    followerId: T,
    followingId: string,
};


export const lookupAuthMemberFollowed = (input: LookupAuthMemberFollowed) => {
    const { followerId, followingId } = input;
    return {
        $lookup: {
            from: 'follows',
            let: {
                localFollowerId: followerId,
                localFollowingId: followingId,
                localMyFavourite: true
            },
            pipeline: [
                {
                    $match: {
                        $expr: {
                            $and: [
                                { $eq: ['$followerId', '$$localFollowerId'] }, { $eq: ['$followingId', '$$localFollowingId'] }
                            ],
                        },
                    },
                },
                {
                    $project: {
                        _id: 0,
                        followerId: 1,
                        followingId: 1,
                        myFollowing: '$$localMyFavourite',
                    },
                },
            ],
            as: 'meFollowed',
        },
    };
};

export const lookupMember = {
    $lookup: {
        from: 'members',
        localField: 'memberId',
        foreignField: '_id',
        as: 'creatorData'
    }
}

export const lookupDealer = {
    $lookup: {
        from: 'dealers',
        localField: 'dealerId',
        foreignField: '_id',
        as: 'creatorData'
    }
}


export const lookupFollowingDataMember = {
    $lookup: {
        from: 'members',
        localField: 'followingId',
        foreignField: '_id',
        as: 'memberData',
    },
};

export const lookupFollowingDataDealer = {
    $lookup: {
        from: 'dealers',
        localField: 'followingId',
        foreignField: '_id',
        as: 'dealerData',
    },
};

export const addFollowingData = {
    $addFields: {
        followingsData: {
            $cond: {
                if: { $gt: [{ $size: '$memberData' }, 0] },
                then: {
                    $mergeObjects: [{ type: 'member' }, { $arrayElemAt: ['$memberData', 0] }],
                },
                else: {
                    $mergeObjects: [{ type: 'dealer' }, { $arrayElemAt: ['$dealerData', 0] }],
                },
            },
        },
    },
};

export const lookupFollowerData = {
    $lookup: {
        from: 'members',
        localField: 'followerId',
        foreignField: '_id',
        as: 'followerData',
    },
};

export const lookupFavorite = {
    $lookup: {
        from: 'members',
        localField: 'favoriteItems.memberId',
        foreignField: '_id',
        as: 'favoriteItems.memberData',
    },
}

export const lookupVisited = {
    $lookup: {
        from: 'members',
        localField: 'visitedItems.memberId',
        foreignField: '_id',
        as: 'visitedItems.memberData',
    },
}

export const lookupSaved = {
    $lookup: {
        from: 'members',
        localField: 'savedItems.memberId',
        foreignField: '_id',
        as: 'savedItems.memberData',
    },
}