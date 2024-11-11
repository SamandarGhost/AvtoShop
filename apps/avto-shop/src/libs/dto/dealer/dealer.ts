import { Field, Int, ObjectType } from "@nestjs/graphql";
import { ObjectId } from "mongoose";
import { DealerBrand, DealerLocation, DealerStatus } from "../../enums/dealer.enum";



@ObjectType()
export class Dealer {
    @Field(() => String)
    _id: ObjectId;

    @Field(() => String)
    dealerTitle: string;

    @Field(() => DealerLocation)
    dealerLocation: DealerLocation;

    @Field(() => DealerBrand)
    dealerBrand: DealerBrand;

    @Field(() => DealerStatus)
    dealerStatus: DealerStatus;

    dealerPassword?: string;

    @Field(() => String)
    dealerShortDesc: string;

    @Field(() => String, { nullable: true })
    dealerLongDesc?: string;

    @Field(() => Int)
    dealerUsedCars: number;

    @Field(() => Int)
    dealerNewCars: number;

    @Field(() => Boolean, { nullable: true })
    dealerFinancing?: boolean;

    @Field(() => Boolean, { nullable: true })
    dealerCarService?: boolean;

    @Field(() => Boolean, { nullable: true })
    dealerTradeIN?: boolean;

    @Field(() => Boolean, { nullable: true })
    dealerCustomization?: boolean;

    @Field(() => Boolean, { nullable: true })
    dealerWarranties?: boolean;

    @Field(() => Boolean, { nullable: true })
    dealerParts?: boolean;

    @Field(() => Boolean, { nullable: true })
    dealerAccessories?: boolean;

    @Field(() => Boolean, { nullable: true })
    dealerCarWash?: boolean;

    @Field(() => Boolean, { nullable: true })
    dealerCarTestDrive?: boolean;

    @Field(() => Boolean, { nullable: true })
    dealerCarDetailing?: boolean;

    @Field(() => Boolean, { nullable: true })
    dealerCarDelivery?: boolean;

    @Field(() => String, { nullable: true })
    dealerPlusService?: string;

    @Field(() => Int)
    dealerOpenAt: number;

    @Field(() => Int)
    dealerCloseAt: number;

    @Field(() => Boolean, { nullable: true })
    dealerPublicHolidays?: boolean;

    @Field(() => Int)
    dealerOpenSunday: number;

    @Field(() => Int)
    dealerCloseSunday: number;

    @Field(() => Int, { nullable: true })
    dealerOpenSaturday?: number;

    @Field(() => Int, { nullable: true })
    dealerCloseSaturday?: number;

    @Field(() => String)
    dealerAddress: string;

    @Field(() => Int)
    dealerPhone: number;

    @Field(() => Int, { nullable: true })
    dealerPhone2?: number;

    @Field(() => String)
    dealerEmail: string;

    @Field(() => Int)
    dealerCars: number;

    @Field(() => String, { nullable: true })
    dealerKakaoTalk?: string;

    @Field(() => Int)
    dealerViews: number;

    @Field(() => Int)
    dealerLikes: number;

    @Field(() => Int)
    dealerComments: number;

    @Field(() => Int)
    dealerArticles: number;

    @Field(() => Int)
    dealerRank: number;

    @Field(() => Int)
    dealerFollowers: number;

    @Field(() => String, { nullable: true })
    accessToken?: string;

    @Field(() => Date, { nullable: true })
    deletedAt?: Date;

    @Field(() => Date)
    createdAt: Date;

    @Field(() => Date)
    updatedAt: Date;
}

@ObjectType()
export class DealerTotalCounter {
    @Field(() => Int, { nullable: true })
    total: number;
}

@ObjectType()
export class Dealers {
    @Field(() => [Dealer])
    list: Dealer[];

    @Field(() => [DealerTotalCounter], { nullable: true })
    metaCounter: DealerTotalCounter[];
}