import { Field, InputType, Int } from "@nestjs/graphql";
import { CarServiceLocation, CarServiceStatus, CarServiceType } from "../../enums/car-service.enum";
import { IsIn, IsInt, IsNotEmpty, IsOptional, Length, Min } from "class-validator";
import { availableCarServiceSorts } from "../../config";
import { Direction } from "../../enums/common.enum";
import { ObjectId } from "mongoose";


@InputType()
export class CarServiceInput {

    @IsNotEmpty()
    @Length(5, 100)
    @Field(() => String)
    carServiceTitle: string;

    @IsNotEmpty()
    @Field(() => CarServiceLocation)
    carServiceLocation: CarServiceLocation;

    @IsNotEmpty()
    @Length(5, 100)
    @Field(() => String)
    carServiceAddress: string;

    @IsNotEmpty()
    @Field(() => CarServiceType)
    carServiceType: CarServiceType;

    @IsNotEmpty()
    @Length(6, 16)
    @Field(() => String)
    carServicePassword: string;

    @IsNotEmpty()
    @IsInt()
    @Field(() => Int)
    carServicePhone: number;

    @IsOptional()
    @IsInt()
    @Field(() => Int, { nullable: true })
    carServicePhone2: number;

    @IsOptional()
    @Field(() => String, { nullable: true })
    carServiceEmail: number;

    @IsOptional()
    @Field(() => String, { nullable: true })
    carServiceKakaoTalk: string;

    @IsNotEmpty()
    @Field(() => String)
    carServiceImage: string;

    @IsNotEmpty()
    @Field(() => [String])
    carServiceImages: string[];

    @IsOptional()
    @Field(() => Boolean)
    carOilChange: boolean;

    @IsOptional()
    @Field(() => Boolean)
    carAlignment: boolean;

    @IsOptional()
    @Field(() => Boolean)
    carTireChange: boolean;

    @IsOptional()
    @Field(() => Boolean)
    carBrakeCheck: boolean;

    @IsOptional()
    @Field(() => Boolean)
    carTireBalance: boolean;

    @IsOptional()
    @Field(() => Boolean)
    carSuspension: boolean;

    @IsOptional()
    @Field(() => Boolean)
    carAirCondition: boolean;

    @IsOptional()
    @Field(() => Boolean)
    carTransmissionCheck: boolean;

    @IsOptional()
    @Field(() => Boolean)
    carEngineDiagnostic: boolean;

    @IsOptional()
    @Field(() => Boolean)
    carExhaust: boolean;

    @IsOptional()
    @Field(() => Boolean)
    carDetailing: boolean;

    @IsOptional()
    @Field(() => Boolean)
    carWindshield: boolean;

    @IsOptional()
    @Field(() => Boolean)
    carTimingBelt: boolean;

    @IsOptional()
    @Field(() => Boolean)
    carChainReplacement: boolean;

    @IsOptional()
    @Field(() => Boolean)
    carBatteryCheck: boolean;

    @IsOptional()
    @IsInt()
    @Field(() => Int)
    carMemberShipBasic: number;

    @IsOptional()
    @IsInt()
    @Field(() => Int)
    carMemberShipStandard: number;

    @IsOptional()
    @IsInt()
    @Field(() => Int)
    carMemberShipPremium: number;

    @IsNotEmpty()
    @Length(20, 200)
    @Field(() => String)
    carServiceShortDesc: string;

    @IsOptional()
    @Length(100, 500)
    @Field(() => String)
    carServiceDesc: string;

    @IsNotEmpty()
    @IsInt()
    @Field(() => Int)
    carServiceOpenAt: number;

    @IsNotEmpty()
    @IsInt()
    @Field(() => Int)
    carServiceCloseAt: number;

    @IsOptional()
    @IsInt()
    @Field(() => Int, { nullable: true })
    carServiceWeekendOpenAt?: number;

    @IsOptional()
    @IsInt()
    @Field(() => Int, { nullable: true })
    carServiceWeekendCloseAt?: number;
}

@InputType()
export class CarServiceLogin {

    @IsNotEmpty()
    @Length(3, 30)
    @Field(() => String)
    carServiceTitle: string;

    @IsNotEmpty()
    @Length(6, 16)
    @Field(() => String)
    carServicePassword: string;

    @IsNotEmpty()
    @Field(() => CarServiceLocation)
    carServiceLocation: CarServiceLocation;
}

@InputType()
class CSISearch {

    @IsOptional()
    @Field(() => String, { nullable: true })
    memberId?: ObjectId;

    @IsOptional()
    @Field(() => [CarServiceType], { nullable: true })
    carServiceTypeList?: CarServiceType[];

    @IsOptional()
    @Field(() => [CarServiceLocation], { nullable: true })
    carServiceLocationList?: CarServiceLocation[];

    @IsOptional()
    @Field(() => String, { nullable: true })
    text?: string;
}

@InputType()
export class CarServicesInquiry {
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
    @IsIn(availableCarServiceSorts)
    @Field(() => String, { nullable: true })
    sort?: string;

    @IsOptional()
    @Field(() => Direction, { nullable: true })
    direction?: Direction;

    @IsNotEmpty()
    @Field(() => CSISearch)
    search: CSISearch;
}

@InputType()
class ALCSISearch {
    @IsOptional()
    @Field(() => CarServiceStatus, { nullable: true })
    carServiceStatus?: CarServiceStatus;

    @IsOptional()
    @Field(() => [CarServiceLocation], { nullable: true })
    carServiceLocationList?: CarServiceLocation[];
}

@InputType()
export class AllCarservicesInquiry {
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
    @IsIn(availableCarServiceSorts)
    @Field(() => String, { nullable: true })
    sort?: string;

    @IsOptional()
    @Field(() => Direction, { nullable: true })
    direction?: Direction;

    @IsNotEmpty()
    @Field(() => ALCSISearch)
    search: ALCSISearch;
}

@InputType()
export class OrdinaryInquiry {
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
}