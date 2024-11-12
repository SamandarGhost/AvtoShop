import { Field, Int, ObjectType } from "@nestjs/graphql";
import { ObjectId } from "mongoose";
import { CarServiceLocation, CarServiceStatus, CarServiceType } from "../../enums/car-service.enum";


@ObjectType()
export class CarService {
    @Field(() => String)
    _id: ObjectId;

    @Field(() => String)
    carServiceTitle: string;

    @Field(() => CarServiceLocation)
    carServiceLocation: CarServiceLocation;

    @Field(() => String)
    carServiceAddress: string;

    @Field(() => CarServiceType)
    carServiceType: CarServiceType;

    @Field(() => CarServiceStatus)
    carServiceStatus: CarServiceStatus;

    carServicePassword?: string;

    @Field(() => Int)
    carServicePhone: number;

    @Field(() => Int)
    carServicePhone2: number;

    @Field(() => String)
    carServiceEmail: string;

    @Field(() => String)
    carServiceKakaoTalk: string;

    @Field(() => [String])
    carServiceImages: string[];

    @Field(() => String)
    carServiceImage: string;

    @Field(() => Boolean)
    carOilChange: boolean;

    @Field(() => Boolean)
    carAlignment: boolean;

    @Field(() => Boolean)
    carTireChange: boolean;

    @Field(() => Boolean)
    carBrakeCheck: boolean;

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

    @Field(() => Boolean)
    carBatteryCheck: boolean;

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
    carServiceShortDesc: string;

    @Field(() => String, { nullable: true })
    carServiceDesc?: string;

    @Field(() => String)
    memberId: ObjectId;

    @Field(() => Date)
    createdAt: Date;

    @Field(() => Date)
    updatedAt: Date;

}