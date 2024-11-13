import { Field, InputType, Int } from "@nestjs/graphql";
import { CarServiceLocation, CarServiceStatus, CarServiceType } from "../../enums/car-service.enum";
import { IsInt, IsNotEmpty, IsOptional, Length } from "class-validator";
import { ObjectId } from "mongoose";


@InputType()
export class CarServiceUpdate {

    @IsNotEmpty()
    @Field(() => String)
    _id: ObjectId;

    @IsOptional()
    @Field(() => CarServiceStatus, { nullable: true })
    carServiceStatus?: CarServiceStatus;

    @IsOptional()
    @Field(() => CarServiceType, { nullable: true })
    carServiceType?: CarServiceType;

    @IsOptional()
    @Length(5, 100)
    @Field(() => String, { nullable: true })
    carServiceTitle?: string;

    @IsOptional()
    @Length(6, 16)
    @IsInt()
    @Field(() => Int, { nullable: true })
    carServicePassword?: number;

    @IsOptional()
    @Field(() => CarServiceLocation, { nullable: true })
    carServiceLocation?: CarServiceLocation;

    @IsOptional()
    @Length(5, 100)
    @Field(() => String, { nullable: true })
    carServiceAddress?: string;

    @IsOptional()
    @IsInt()
    @Field(() => String, { nullable: true })
    carServicePhone?: string;

    @IsOptional()
    @IsInt()
    @Field(() => String, { nullable: true })
    carServicePhone2?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    carServcieEmail?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    carServiceKakaoTalk?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    carServiceImage?: string;

    @IsOptional()
    @Field(() => [String], { nullable: true })
    carServiceImages?: string[];

    @IsNotEmpty()
    @Length(20, 200)
    @Field(() => String, { nullable: true })
    carServiceShortDesc?: string;

    @IsOptional()
    @Length(100, 500)
    @Field(() => String, { nullable: true })
    carServiceDesc?: string;

    @IsOptional()
    @IsInt()
    @Field(() => String, { nullable: true })
    carServiceOpenAt?: string;

    @IsOptional()
    @IsInt()
    @Field(() => String, { nullable: true })
    carServiceCloseAt?: string;

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
    carMemberShipPremium?: string;
}