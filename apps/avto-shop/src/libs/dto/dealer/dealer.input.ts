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
    @IsInt()
    @Field(() => String)
    dealerPhone: string;

    @IsOptional()
    @IsInt()
    @Field(() => String, { nullable: true })
    dealerPhone2?: string;

    @IsNotEmpty()
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
    @IsInt()
    @Field(() => String)
    dealerCloseAt: string;
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
    dealerStatus?: DealerStatus;

    @IsOptional()
    @Field(() => [DealerLocation], { nullable: true })
    locationList?: DealerLocation[];
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