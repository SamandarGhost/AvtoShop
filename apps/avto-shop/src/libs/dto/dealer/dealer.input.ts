import { Field, InputType, Int } from "@nestjs/graphql";
import { IsIn, IsNotEmpty, IsOptional, Length, Min } from "class-validator";
import { DealerBrand, DealerLocation } from "../../enums/dealer.enum";
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
    @Field(() => Int)
    dealerPhone: number;

    @IsOptional()
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
    dealerShortDesc: string;

    @IsNotEmpty()
    @Field(() => Int)
    dealerOpenAt: number;

    @IsNotEmpty()
    @Field(() => Int)
    dealerCloseAt: number;

    @IsNotEmpty()
    @Field(() => Boolean)
    dealerPublicHolidays: boolean;

    @IsOptional()
    @Field(() => Int, { nullable: true })
    dealerOpenSunday?: number;

    @IsOptional()
    @Field(() => Int, { nullable: true })
    dealerOpenSaturday?: number;

    @IsOptional()
    @Field(() => Int, { nullable: true })
    dealerCloseSunday?: number;

    @IsOptional()
    @Field(() => Int, { nullable: true })
    dealerCloseSaturday?: number;

    @IsNotEmpty()
    @Field(() => String)
    dealerAddress: string;

    @IsNotEmpty()
    @Field(() => String)
    dealerEmail: string;

    @IsOptional()
    @Field(() => String)
    dealerKakaoTalk?: string;
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
    @Field(() => Int)
    page: number;

    @IsNotEmpty()
    @Min(1)
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