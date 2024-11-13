import { Field, InputType, Int } from "@nestjs/graphql";
import { CarServiceLocation, CarServiceStatus, CarServiceType } from "../../enums/car-service.enum";
import { IsIn, IsInt, IsNotEmpty, IsOptional, Length, Min } from "class-validator";
import { availableCarServiceSorts } from "../../config";
import { Direction } from "../../enums/common.enum";
import { ObjectId } from "mongoose";


@InputType()
export class CarServiceInput {

    @IsNotEmpty()
    @Field(() => CarServiceType)
    carServiceType: CarServiceType;

    @IsNotEmpty()
    @Length(5, 100)
    @Field(() => String)
    carServiceTitle: string;

    @IsNotEmpty()
    @Length(6, 16)
    @Field(() => String)
    carServicePassword: string;

    @IsNotEmpty()
    @Field(() => CarServiceLocation)
    carServiceLocation: CarServiceLocation;

    @IsNotEmpty()
    @Length(5, 100)
    @Field(() => String)
    carServiceAddress: string;

    @IsNotEmpty()
    @IsInt()
    @Field(() => String)
    carServicePhone: string;

    @IsOptional()
    @IsInt()
    @Field(() => String, { nullable: true })
    carServicePhone2: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    carServcieEmail: number;

    @IsOptional()
    @Field(() => String, { nullable: true })
    carServiceKakaoTalk: string;

    @IsNotEmpty()
    @Field(() => String)
    carServiceImage: string;

    @IsNotEmpty()
    @Field(() => [String])
    carServiceImages: string[];

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
    @Field(() => String)
    carServiceOpenAt: string;

    @IsNotEmpty()
    @IsInt()
    @Field(() => String)
    carServiceCloseAt: string;

    @IsOptional()
    @IsInt()
    @Field(() => String, { nullable: true })
    carServiceWeekendOpenAt?: string;

    @IsOptional()
    @IsInt()
    @Field(() => String, { nullable: true })
    carServiceWeekendCloseAt?: string;

    @IsOptional()
    @IsInt()
    @Field(() => Boolean, { nullable: true })
    carServicePublicHolidays?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carOilChange?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carAlignment?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carTireChange?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carBrakeCheck?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carBatteryCheck?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carTireBalance?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carSuspension?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carAirCondition?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carTransmissionCheck?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carEngineDiagnostic?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carExhaust?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carDetailing?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carWindshield?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carTimingBelt?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carChainReplacement?: boolean;

    @IsOptional()
    @IsInt()
    @Field(() => String, { nullable: true })
    carMemberShipBasic?: string;

    @IsOptional()
    @IsInt()
    @Field(() => String, { nullable: true })
    carMemberShipStandard?: string;

    @IsOptional()
    @IsInt()
    @Field(() => String, { nullable: true })
    carMemberShipPremium: string;
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