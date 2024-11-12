import { Field, InputType, Int } from "@nestjs/graphql";
import { IsIn, IsInt, IsNotEmpty, IsOptional, Length, Min } from "class-validator";
import { DealerBrand, DealerLocation, DealerStatus } from "../../enums/dealer.enum";
import { availableDealerSorts } from "../../config";
import { Direction } from "../../enums/common.enum";


@InputType()
export class DealerInput {

    @IsNotEmpty()
    @Length(3, 30)
    @Field(() => String)
    dealerTitle: string;

    @IsNotEmpty()
    @Length(6, 16)
    @Field(() => String)
    dealerPassword: string;

    @IsNotEmpty()
    @IsInt()
    @Field(() => Int)
    dealerPhone: number;

    @IsOptional()
    @IsInt()
    @Field(() => Int)
    dealerPhone2?: number;

    @IsNotEmpty()
    @Field(() => DealerLocation)
    dealerLocation: DealerLocation;

    @IsNotEmpty()
    @Field(() => DealerBrand)
    dealerBrand: DealerBrand;

    @IsNotEmpty()
    @Field(() => String)
    dealerImage: string;

    @IsOptional()
    @Field(() => [String], { nullable: true })
    dealerImages?: string[];

    @IsNotEmpty()
    @Field(() => String)
    dealerShortDesc: string;

    @IsNotEmpty()
    @Field(() => String)
    dealerAddress: string;

    @IsNotEmpty()
    @Field(() => String)
    dealerEmail: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    dealerKakaoTalk?: string;

    @IsNotEmpty()
    @IsInt()
    @Field(() => Int)
    dealerOpenAt: number;

    @IsNotEmpty()
    @IsInt()
    @Field(() => Int)
    dealerCloseAt: number;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    dealerPublicHolidays?: boolean;

    @IsOptional()
    @IsInt()
    @Field(() => Int, { nullable: true })
    dealerOpenSunday?: number;

    @IsOptional()
    @IsInt()
    @Field(() => Int, { nullable: true })
    dealerCloseSunday?: number;

    @IsOptional()
    @IsInt()
    @Field(() => Int, { nullable: true })
    dealerOpenSaturday?: number;

    @IsOptional()
    @IsInt()
    @Field(() => Int, { nullable: true })
    dealerCloseSaturday?: number;
}

@InputType()
export class DealerLogin {

    @IsNotEmpty()
    @Length(3, 30)
    @Field(() => String)
    dealerTitle: string;

    @IsNotEmpty()
    @Length(6, 16)
    @Field(() => String)
    dealerPassword: string;

    @IsNotEmpty()
    @Field(() => DealerLocation)
    dealerLocation: DealerLocation;

    @IsNotEmpty()
    @Field(() => DealerBrand)
    dealerBrand: DealerBrand;
}

@InputType()
class DISearch {
    @IsOptional()
    @Field(() => String, { nullable: true })
    text?: string;
}

@InputType()
export class DealersInquiry {
    @IsNotEmpty()
    @Min(1)
    @IsInt()
    @Field(() => Int)
    page: number;

    @IsNotEmpty()
    @Min(1)
    @IsInt()
    @Field(() => Int)
    limit: number;

    @IsNotEmpty()
    @IsIn(availableDealerSorts)
    @Field(() => String, { nullable: true })
    sort?: number;

    @IsOptional()
    @Field(() => Direction, { nullable: true })
    dirction?: Direction;

    @IsOptional()
    @Field(() => DISearch)
    search?: DISearch;
}

@InputType()
class ALDISearch {
    @IsOptional()
    @Field(() => DealerStatus, { nullable: true })
    productStatus?: DealerStatus;

    @IsOptional()
    @Field(() => [DealerLocation], { nullable: true })
    propertyLocationList?: DealerLocation[];
}

@InputType()
export class AllDealersInquiry {
    @IsNotEmpty()
    @Min(1)
    @IsInt()
    @Field(() => Int)
    page: number;

    @IsNotEmpty()
    @Min(1)
    @IsInt()
    @Field(() => Int)
    limit: number;

    @IsOptional()
    @IsIn(availableDealerSorts)
    @Field(() => String, { nullable: true })
    sort?: string;

    @IsOptional()
    @Field(() => Direction, { nullable: true })
    direction?: Direction;

    @IsNotEmpty()
    @Field(() => ALDISearch)
    search: ALDISearch;
}