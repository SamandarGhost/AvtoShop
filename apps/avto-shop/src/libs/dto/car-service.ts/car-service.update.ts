import { Field, InputType, Int } from "@nestjs/graphql";
import { CarServiceLocation, CarServiceStatus, CarServiceType } from "../../enums/car-service.enum";
import { IsInt, IsNotEmpty, IsOptional, Length } from "class-validator";


@InputType()
export class CarServiceInput {

    @IsOptional()
    @Length(5, 100)
    @Field(() => String, { nullable: true })
    carServiceTitle?: string;

    @IsOptional()
    @Field(() => CarServiceLocation, { nullable: true })
    carServiceLocation?: CarServiceLocation;

    @IsOptional()
    @Length(5, 100)
    @Field(() => String, { nullable: true })
    carServiceAddress?: string;

    @IsOptional()
    @Field(() => CarServiceType, { nullable: true })
    carServiceType?: CarServiceType;

    @IsOptional()
    @Field(() => CarServiceStatus, { nullable: true })
    dealerStatus?: CarServiceStatus;

    @IsOptional()
    @Length(6, 16)
    @IsInt()
    @Field(() => Int, { nullable: true })
    carServicePassword?: number;

    @IsOptional()
    @IsInt()
    @Field(() => Int, { nullable: true })
    carServicePhone: number;

    @IsOptional()
    @IsInt()
    @Field(() => Int, { nullable: true })
    carServicePhone2?: number;

    @IsOptional()
    @Field(() => String, { nullable: true })
    carServiceEmail?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    carServiceKakaoTalk?: string;

    @IsOptional()
    @Field(() => [String], { nullable: true })
    carServiceImages?: string[];

    @IsOptional()
    @Field(() => String, { nullable: true })
    carServiceImage?: string;

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
    @Field(() => Boolean, { nullable: true })
    carBatteryCheck?: boolean;

    @IsOptional()
    @IsInt()
    @Field(() => Int, { nullable: true })
    carMemberShipBasic?: number;

    @IsOptional()
    @IsInt()
    @Field(() => Int, { nullable: true })
    carMemberShipStandard?: number;

    @IsOptional()
    @IsInt()
    @Field(() => Int, { nullable: true })
    carMemberShipPremium?: number;

    @IsNotEmpty()
    @Length(20, 200)
    @Field(() => String, { nullable: true })
    carServiceShortDesc?: string;

    @IsOptional()
    @Length(100, 500)
    @Field(() => String, { nullable: true })
    carServiceDesc?: string;
}