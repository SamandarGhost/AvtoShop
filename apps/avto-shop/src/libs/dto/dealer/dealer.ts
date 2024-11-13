import { Field, Int, ObjectType } from "@nestjs/graphql";
import { ObjectId } from "mongoose";
import { DealerBrand, DealerLocation, DealerStatus } from "../../enums/dealer.enum";



@ObjectType()
export class Dealer {
    @Field(() => String)
    _id: ObjectId;

    @Field(() => DealerStatus)
    dealerStatus: DealerStatus;

    @Field(() => String)
    dealerTitle: string;

    @Field(() => DealerBrand)
    dealerBrand: DealerBrand;

    dealerPassword?: string;

    @Field(() => DealerLocation)
    dealerLocation: DealerLocation;

    @Field(() => String)
    dealerAddress: string;

    @Field(() => String)
    dealerImage: string;

    @Field(() => [String], { nullable: true })
    dealerImages?: string[];

    @Field(() => Int)
    dealerPhone: number;

    @Field(() => Int, { nullable: true })
    dealerPhone2?: number;

    @Field(() => String)
    dealerEmail: string;

    @Field(() => String, { nullable: true })
    dealerKakaoTalk?: string;

    @Field(() => String, { nullable: true })
    dealerYoutube?: string;

    @Field(() => String, { nullable: true })
    dealerInstagram?: string;

    @Field(() => String, { nullable: true })
    dealerFacebook?: string;

    @Field(() => String, { nullable: true })
    dealerTikTok?: string;

    @Field(() => String, { nullable: true })
    dealerNaverBlog?: string;

    @Field(() => String, { nullable: true })
    dealerXcom?: string;

    @Field(() => String)
    dealerShortDesc: string;

    @Field(() => String, { nullable: true })
    dealerLongDesc?: string;

    @Field(() => String)
    dealerOpenAt: string;

    @Field(() => String)
    dealerCloseAt: string;

    @Field(() => String, { nullable: true })
    dealerOpenSunday?: string;

    @Field(() => String, { nullable: true })
    dealerCloseSunday?: string;

    @Field(() => String, { nullable: true })
    dealerOpenSaturday?: string;

    @Field(() => String, { nullable: true })
    dealerCloseSaturday?: string;

    @Field(() => Boolean)
    dealerPublicHolidays: boolean;

    @Field(() => Int)
    dealerCars: number;

    @Field(() => Int)
    dealerUsedCars: number;

    @Field(() => Int)
    dealerNewCars: number;

    @Field(() => Boolean)
    dealerFinancing: boolean;

    @Field(() => Boolean)
    dealerCarService: boolean;

    @Field(() => Boolean)
    dealerTradeIn: boolean;

    @Field(() => Boolean)
    dealerCustomization: boolean;

    @Field(() => Boolean)
    dealerWarranties: boolean;

    @Field(() => Boolean)
    dealerParts: boolean;

    @Field(() => Boolean)
    dealerAccessories: boolean;

    @Field(() => Boolean)
    dealerCarDetailing: boolean;

    @Field(() => Boolean)
    dealerCarWash: boolean;

    @Field(() => Boolean)
    dealerCarTestDrive: boolean;

    @Field(() => Boolean)
    dealerCarDelivery: boolean;

    @Field(() => String, { nullable: true })
    dealerPlusService?: string;

    @Field(() => Int)
    dealerComfort: number;

    @Field(() => Int)
    dealerPerformance: number;

    @Field(() => Int)
    dealerExterior: number;

    @Field(() => Int)
    dealerInterior: number;

    @Field(() => Int)
    dealerReliability: number;

    @Field(() => Int)
    dealerFast: number;

    @Field(() => Int)
    dealerFollowers: number;

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