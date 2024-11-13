import { Field, InputType, Int } from "@nestjs/graphql";
import { IsInt, IsNotEmpty, IsOptional, Length, Min } from "class-validator";
import { CarBody, CarBrand, CarColor, CarDriveType, CarFuelType, CarGroup, CarLocation, CarMadeIn, CarSort, CarTransmission, CarTuningType, CarType } from "../../enums/car.enum";
import { ObjectId } from "mongoose";


@InputType()
export class CarUpdate {

    @IsNotEmpty()
    @Field(() => String)
    _id: ObjectId;

    @IsOptional()
    @Field(() => CarType, { nullable: true })
    carType?: CarType;

    @IsOptional()
    @Length(3, 100)
    @Field(() => String, { nullable: true })
    carTitle?: string;

    @IsOptional()
    @Field(() => CarBody, { nullable: true })
    carBody?: CarBody;

    @IsOptional()
    @Field(() => CarSort, { nullable: true })
    carSort?: CarSort;

    @IsOptional()
    @Field(() => CarGroup, { nullable: true })
    carGroup?: CarGroup;

    @IsOptional()
    @Field(() => CarMadeIn, { nullable: true })
    carMadeIn?: CarMadeIn;

    @IsOptional()
    @Field(() => CarBrand, { nullable: true })
    carBrand?: CarBrand;

    @IsOptional()
    @Field(() => String, { nullable: true })
    carModel?: string;

    @IsOptional()
    @IsInt()
    @Field(() => Int, { nullable: true })
    carPrice?: number;

    @IsOptional()
    @Field(() => [String], { nullable: true })
    carImages?: string[];

    @IsOptional()
    @Field(() => String, { nullable: true })
    carVideo?: string;

    @IsOptional()
    @Field(() => CarLocation, { nullable: true })
    carLocation?: CarLocation;

    @IsOptional()
    @Length(5, 200)
    @Field(() => String, { nullable: true })
    carAddress?: string;

    @IsOptional()
    @Length(10, 500)
    @Field(() => String, { nullable: true })
    carDesc?: string

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carBarter?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carRent?: boolean;

    @IsOptional()
    @IsInt()
    @Field(() => Int, { nullable: true })
    carYear?: number;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carTuning?: boolean;

    @IsOptional()
    @Field(() => CarTuningType, { nullable: true })
    carTuningType?: CarTuningType;

    @IsOptional()
    @IsInt()
    @Field(() => Int, { nullable: true })
    carMileage?: number;

    @IsOptional()
    @Field(() => CarFuelType, { nullable: true })
    carFuelType?: CarFuelType;

    @IsOptional()
    @Field(() => CarDriveType, { nullable: true })
    carDriveType?: CarDriveType;

    @IsOptional()
    @Field(() => CarTransmission, { nullable: true })
    carTransmission?: CarTransmission;

    @IsOptional()
    @Field(() => String, { nullable: true })
    carEngineSize?: string;

    @IsOptional()
    @Field(() => CarColor, { nullable: true })
    carColor?: CarColor;

    @IsOptional()
    @IsInt()
    @Field(() => Int, { nullable: true })
    carFullFuel?: number;

    @IsOptional()
    @IsInt()
    @Field(() => Int, { nullable: true })
    carMpgHw?: number;

    @IsOptional()
    @IsInt()
    @Field(() => Int, { nullable: true })
    carMpgCity?: number;

    @IsOptional()
    @Min(1)
    @Field(() => Int, { nullable: true })
    carDoor?: number;

    @IsOptional()
    @IsInt()
    @Min(1)
    @Field(() => Int, { nullable: true })
    carCylinders?: number;

    @IsOptional()
    @IsInt()
    @Field(() => Int, { nullable: true })
    carMaxSpeed?: number;

    @IsOptional()
    @IsInt()
    @Field(() => String, { nullable: true })
    carHundredSpeed?: string;

    @IsOptional()
    @IsInt()
    @Field(() => Int, { nullable: true })
    carHorsePower?: number;

    @IsOptional()
    @Field(() => String, { nullable: true })
    carTorque?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    carLength?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    carHeigth?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    carWidth?: string;

    @IsOptional()
    @IsInt()
    @Field(() => Int, { nullable: true })
    carSeatsUp?: number;

    @IsOptional()
    @IsInt()
    @Field(() => Int, { nullable: true })
    carWeigth?: number;

    @IsOptional()
    @IsInt()
    @Field(() => Int, { nullable: true })
    carLoadWeight?: number;

    @IsOptional()
    @Field(() => String, { nullable: true })
    carTireSize?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    carWheelBase?: string;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carAutoBrake?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carCruiseControl?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carESC?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carAutonomuosDrive?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carExteriorLight?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carPanoramicSunroof?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carHeatedSeats?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carCooledSeats?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carTouchscreenDisplay?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carAutoHeadLight?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carStarStop?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carNoiseCancellation?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carRemoteKeyless?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carLaneDW?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carBlindSpotMonitoring?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carRearCrossTrafficAlert?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carApplePlay?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carAndroidAuto?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carVoiceControl?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carBluetoothConnectivity?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carWirelessCharging?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carParkingAssist?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carSurroundViewCamera?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carFrontSensors?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carRearSensors?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carFrontRecordCamera?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carRearRecordCamera?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carHeadsUpDisplay?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carClimateControl?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carAdjustableSeats?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carMemorySeats?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carPowerTrain?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carRegenerativeBraking?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carTractionControl?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carStabilityControl?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carHillStartAssist?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carTirePressureSystem?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carPushButton?: boolean;

    @IsOptional()
    @IsInt()
    @Field(() => Int, { nullable: true })
    carCrush?: number;

    @IsOptional()
    @IsInt()
    @Field(() => Int, { nullable: true })
    carRepair?: number;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carFrontBumper?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carBackBumper?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carBonnet?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carTailgate?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carRightFrontWing?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carLeftFrontWing?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carRightBackWing?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carLeftBackWing?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carRoof?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carRightFrontDoor?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carLeftFrontDoor?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carRightBackDoor?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carLeftBackDoor?: boolean;

    soldAt?: Date;

    deletedAt?: Date;
}