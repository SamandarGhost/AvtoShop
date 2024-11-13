import { Field, Int, ObjectType } from "@nestjs/graphql";
import { ObjectId } from "mongoose";
import { CarServiceLocation, CarServiceStatus, CarServiceType } from "../../enums/car-service.enum";


@ObjectType()
export class CarService {
    @Field(() => String)
    _id: ObjectId;

    @Field(() => CarServiceType)
    carServiceType: CarServiceType;

    @Field(() => String)
    carServiceTitle: string;

    carServicePassword?: string;

    @Field(() => CarServiceLocation)
    carServiceLocation: CarServiceLocation;

    @Field(() => String)
    carServiceAddress: string;

    @Field(() => CarServiceStatus)
    carServiceStatus: CarServiceStatus;

    @Field(() => Int)
    carServicePhone: number;

    @Field(() => Int)
    carServicePhone2: number;

    @Field(() => String)
    carServcieEmail: string;

    @Field(() => String)
    carServiceKakaoTalk: string;

    @Field(() => String)
    carServiceImage: string;

    @Field(() => [String])
    carServiceImages: string[];

    @Field(() => String)
    carServiceShortDesc: string;

    @Field(() => String, { nullable: true })
    carServiceDesc?: string;

    @Field(() => String)
    carServiceOpenAt: string;

    @Field(() => String)
    carServiceCloseAt: string;

    @Field(() => String, { nullable: true })
    carServiceWeekendOpenAt?: string;

    @Field(() => String, { nullable: true })
    carServiceWeekendCloseAt?: string;

    @Field(() => String, { nullable: true })
    carServicePublicHolidays?: string;

    @Field(() => Boolean)
    carOilChange: boolean;

    @Field(() => Boolean)
    carAlignment: boolean;

    @Field(() => Boolean)
    carTireChange: boolean;

    @Field(() => Boolean)
    carBrakeCheck: boolean;

    @Field(() => Boolean)
    carBatteryCheck: boolean;

    @Field(() => Boolean)
    carTireBalance: boolean;

    @Field(() => Boolean)
    carSuspension: boolean;

    @Field(() => Boolean)
    carAirCondition: boolean;

    @Field(() => Boolean)
    carTransmissionCheck: boolean;

    @Field(() => Boolean)
    carEngineDiagnostic: boolean;

    @Field(() => Boolean)
    carExhaust: boolean;

    @Field(() => Boolean)
    carDetailing: boolean;

    @Field(() => Boolean)
    carWindshield: boolean;

    @Field(() => Boolean)
    carTimingBelt: boolean;

    @Field(() => Boolean)
    carChainReplacement: boolean;

    @Field(() => Int)
    carMemberShipBasic: number;

    @Field(() => Int)
    carMemberShipStandard: number;

    @Field(() => Int)
    carMemberShipPremium: number;

    @Field(() => Int)
    carServiceComfort: number;

    @Field(() => Int)
    carServiceReliability: number;

    @Field(() => Int)
    carServiceFast: number;

    @Field(() => Int)
    carServiceValue: number;

    @Field(() => String)
    memberId: ObjectId;

    @Field(() => Date)
    createdAt: Date;

    @Field(() => Date)
    updatedAt: Date;

}