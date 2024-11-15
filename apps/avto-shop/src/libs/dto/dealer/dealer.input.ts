import { Field, InputType, Int } from "@nestjs/graphql";
import { IsEmail, IsIn, IsInt, IsNotEmpty, IsOptional, Length, Min } from "class-validator";
import { DealerBrand, DealerLocation, DealerStatus } from "../../enums/dealer.enum";
import { availableDealerSorts } from "../../config";
import { Direction } from "../../enums/common.enum";
import { ObjectId } from "mongoose";


@InputType()
export class DealerInput {

    @IsNotEmpty()
    @Length(3, 30)
    @Field(() => String)
    dealerTitle: string;

    @IsNotEmpty()
    @Field(() => DealerBrand)
    dealerBrand: DealerBrand;

    @IsNotEmpty()
    @Length(6, 16)
    @Field(() => String)
    dealerPassword: string;

    @IsNotEmpty()
    @Field(() => DealerLocation)
    dealerLocation: DealerLocation;

    @IsNotEmpty()
    @Field(() => String)
    dealerAddress: string;

    @IsNotEmpty()
    @Field(() => String)
    dealerImage: string;

    @IsOptional()
    @Field(() => [String], { nullable: true })
    dealerImages?: string[];

    @IsNotEmpty()
    @Field(() => String)
    dealerPhone: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    dealerPhone2?: string;

    @IsNotEmpty()
    @IsEmail()
    @Field(() => String)
    dealerEmail: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    dealerKakaoTalk?: string;

    @IsNotEmpty()
    @Field(() => String)
    dealerShortDesc: string;

    @IsNotEmpty()
    @Field(() => String)
    dealerOpenAt: string;

    @IsNotEmpty()
    @Field(() => String)
    dealerCloseAt: string;

    memberId?: ObjectId;
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
}

@InputType()
class DISearch {
    @IsOptional()
    @Field(() => String, { nullable: true })
    memberId?: ObjectId;

    @IsOptional()
    @Field(() => [DealerBrand], { nullable: true })
    brandList?: DealerBrand[];

    @IsOptional()
    @Field(() => [DealerLocation], { nullable: true })
    locationList?: DealerLocation[];

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
    direction?: Direction;

    @IsOptional()
    @Field(() => DISearch)
    search?: DISearch;
}

@InputType()
class ALDISearch {
    @IsOptional()
    @Field(() => DealerStatus, { nullable: true })
    dealerStatus?: DealerStatus;

    @IsOptional()
    @Field(() => [DealerLocation], { nullable: true })
    locationList?: DealerLocation[];

    @IsOptional()
    @Field(() => [DealerBrand], { nullable: true })
    brandList?: DealerBrand[];

    @IsOptional()
    @Field(() => String, { nullable: true })
    text?: string;
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