import { Field, InputType, Int } from "@nestjs/graphql";
import { CarBody, CarBrand, CarColor, CarDriveType, CarFuelType, CarGroup, CarLocation, CarMadeIn, CarSort, CarStatus, CarTransmission, CarTuningType, CarType } from "../../enums/car.enum";
import { IsIn, IsInt, IsNotEmpty, IsOptional, Length, Min } from "class-validator";
import { availableCarSorts, availableOptions } from "../../config";
import { Direction } from "../../enums/common.enum";



@InputType()
export class CarInput {

    @IsNotEmpty()
    @Field(() => CarType)
    carType: CarType;

    @IsNotEmpty()
    @Length(3, 100)
    @Field(() => String)
    carTitle: string;

    @IsNotEmpty()
    @Field(() => CarBody)
    carBody: CarBody;

    @IsNotEmpty()
    @Field(() => CarSort)
    carSort: CarSort;

    @IsNotEmpty()
    @Field(() => CarGroup)
    carGroup: CarGroup;

    @IsNotEmpty()
    @Field(() => CarMadeIn)
    carMadeIn: CarMadeIn;

    @IsNotEmpty()
    @Field(() => CarBrand)
    carBrand: CarBrand;

    @IsNotEmpty()
    @Field(() => String)
    carModel: string;

    @IsNotEmpty()
    @IsInt()
    @Field(() => Int)
    carPrice: number;

    @IsNotEmpty()
    @Field(() => [String])
    carImages: string[];

    @IsOptional()
    @Field(() => String, { nullable: true })
    carVideo?: string;

    @IsNotEmpty()
    @Field(() => CarLocation)
    carLocation: CarLocation;

    @IsNotEmpty()
    @Length(5, 200)
    @Field(() => String)
    carAddress: string;

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

    @IsNotEmpty()
    @IsInt()
    @Field(() => Int)
    carYear: number;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    carTuning?: boolean;

    @IsOptional()
    @Field(() => CarTuningType, { nullable: true })
    carTuningType?: CarTuningType;

    @IsNotEmpty()
    @IsInt()
    @Field(() => Int)
    carMileage: number;

    @IsNotEmpty()
    @Field(() => CarFuelType)
    carFuelType: CarFuelType;

    @IsNotEmpty()
    @Field(() => CarDriveType)
    carDriveType: CarDriveType;

    @IsNotEmpty()
    @Field(() => CarTransmission)
    carTransmission: CarTransmission;

    @IsNotEmpty()
    @Field(() => String)
    carEngineSize: string;

    @IsNotEmpty()
    @Field(() => CarColor)
    carColor: CarColor;

    @IsNotEmpty()
    @IsInt()
    @Field(() => Int)
    carFullFuel: number;

    @IsNotEmpty()
    @IsInt()
    @Field(() => Int)
    carMpgHw: number;

    @IsNotEmpty()
    @IsInt()
    @Field(() => Int)
    carMpgCity: number;

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

    memberId: string;

    dealerId?: string;
}

@InputType()
export class CarRange {
    @IsInt()
    @Field(() => Int)
    min: number;

    @IsInt()
    @Field(() => Int)
    max: number
}

@InputType()
export class PeriodRange {
    @Field(() => Date)
    start: Date;

    @Field(() => Date)
    end: Date
}

@InputType()
class CISearch {
    @IsOptional()
    @Field(() => String, { nullable: true })
    memberId?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    dealerId?: string;

    @IsOptional()
    @Field(() => [CarBody], { nullable: true })
    badyList?: CarBody[];

    @IsOptional()
    @Field(() => [CarSort], { nullable: true })
    sortList?: CarSort[];

    @IsOptional()
    @Field(() => [CarGroup], { nullable: true })
    groupList?: CarGroup[];

    @IsOptional()
    @Field(() => [CarMadeIn], { nullable: true })
    madeInList?: CarMadeIn[];

    @IsOptional()
    @Field(() => [CarBrand], { nullable: true })
    brandList?: CarBrand[];

    @IsOptional()
    @Field(() => [CarLocation], { nullable: true })
    locationList?: CarLocation[];

    @IsOptional()
    @Field(() => [CarTuningType], { nullable: true })
    tuningTypeList?: CarTuningType[];

    @IsOptional()
    @Field(() => [CarFuelType], { nullable: true })
    fuelTypeList?: CarFuelType[];

    @IsOptional()
    @Field(() => [CarDriveType], { nullable: true })
    driveTypeList?: CarDriveType[];

    @IsOptional()
    @Field(() => [CarTransmission], { nullable: true })
    transmissionList?: CarTransmission[];

    @IsOptional()
    @Field(() => [CarColor], { nullable: true })
    colorList?: CarColor[];

    @IsOptional()
    @Field(() => CarRange, { nullable: true })
    yearRange?: CarRange;

    @IsOptional()
    @Field(() => CarRange, { nullable: true })
    mileageRange?: CarRange;

    @IsOptional()
    @Field(() => CarRange, { nullable: true })
    priceRange?: CarRange;

    @IsOptional()
    @IsIn(availableOptions, { each: true })
    @Field(() => [String], { nullable: true })
    options?: string[];

    @IsOptional()
    @Field(() => String, { nullable: true })
    text?: string;
}

export class CarsInquiry {
    @IsNotEmpty()
    @Min(1)
    @Field(() => Int)
    page: number;

    @IsNotEmpty()
    @Min(1)
    @Field(() => Int)
    limit: number;

    @IsOptional()
    @IsIn(availableCarSorts)
    @Field(() => String, { nullable: true })
    sort?: string;

    @IsOptional()
    @Field(() => Direction, { nullable: true })
    direction?: Direction;

    @IsNotEmpty()
    @Field(() => CISearch)
    search: CISearch;
}

@InputType()
class ACISearch {
    @IsOptional()
    @Field(() => CarStatus, { nullable: true })
    carStatus?: CarStatus;
}

@InputType()
export class AgentCarsInquiry {
    @IsNotEmpty()
    @Min(1)
    @Field(() => Int)
    page: number;

    @IsNotEmpty()
    @Min(1)
    @Field(() => Int)
    limit: number;

    @IsOptional()
    @IsIn(availableCarSorts)
    @Field(() => String, { nullable: true })
    sort?: string;

    @IsOptional()
    @Field(() => Direction, { nullable: true })
    direction?: Direction;

    @IsNotEmpty()
    @Field(() => ACISearch)
    search: ACISearch;
}

@InputType()
class DCISearch {
    @IsOptional()
    @Field(() => CarStatus, { nullable: true })
    carStatus?: CarStatus;
}

@InputType()
export class DealerCarsInquiry {
    @IsNotEmpty()
    @Min(1)
    @Field(() => Int)
    page: number;

    @IsNotEmpty()
    @Min(1)
    @Field(() => Int)
    limit: number;

    @IsOptional()
    @IsIn(availableCarSorts)
    @Field(() => String, { nullable: true })
    sort?: string;

    @IsOptional()
    @Field(() => Direction, { nullable: true })
    direction?: Direction;

    @IsNotEmpty()
    @Field(() => DCISearch)
    search: DCISearch;
}

@InputType()
class ALCISearch {
    @IsOptional()
    @Field(() => CarStatus, { nullable: true })
    carStatus?: CarStatus;

    @IsOptional()
    @Field(() => [CarBody], { nullable: true })
    badyList?: CarBody[];

    @IsOptional()
    @Field(() => [CarSort], { nullable: true })
    sortList?: CarSort[];

    @IsOptional()
    @Field(() => [CarGroup], { nullable: true })
    groupList?: CarGroup[];

    @IsOptional()
    @Field(() => [CarMadeIn], { nullable: true })
    madeInList?: CarMadeIn[];

    @IsOptional()
    @Field(() => [CarBrand], { nullable: true })
    brandList?: CarBrand[];

    @IsOptional()
    @Field(() => [CarLocation], { nullable: true })
    locationList?: CarLocation[];

    @IsOptional()
    @Field(() => [CarTuningType], { nullable: true })
    tuningTypeList?: CarTuningType[];

    @IsOptional()
    @Field(() => [CarFuelType], { nullable: true })
    fuelTypeList?: CarFuelType[];

    @IsOptional()
    @Field(() => String, { nullable: true })
    text?: string;

}

@InputType()
export class AllCarsInquiry {
    @IsNotEmpty()
    @Min(1)
    @Field(() => Int)
    page: number;

    @IsNotEmpty()
    @Min(1)
    @Field(() => Int)
    limit: number;

    @IsOptional()
    @IsIn(availableCarSorts)
    @Field(() => String, { nullable: true })
    sort?: string;

    @IsOptional()
    @Field(() => Direction, { nullable: true })
    direction?: Direction;

    @IsNotEmpty()
    @Field(() => ALCISearch)
    search: ALCISearch;
}

@InputType()
export class OrdinaryInquiry {
    @IsNotEmpty()
    @Min(1)
    @Field(() => Int)
    page: number;

    @IsNotEmpty()
    @Min(1)
    @Field(() => Int)
    limit: number;
}