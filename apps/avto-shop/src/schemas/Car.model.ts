import { Schema } from 'mongoose';
import { CarStatus, CarBody, CarType, CarSort, CarMadeIn, CarBrand, CarGroup, CarLocation, CarFuelType, CarTransmission, CarDriveType, CarTuning, CarTuningType } from '../libs/enums/car.enum';

const CarSchema = new Schema(
    {
        carType: {
            type: String,
            enum: CarType,
            required: true,
        },

        carBody: {
            type: String,
            enum: CarBody,
            required: true,
        },

        carStatus: {
            type: String,
            enum: CarStatus,
            default: CarStatus.ACTIVE,
        },

        carSort: {
            type: String,
            enum: CarSort,
            required: true,
        },

        carMadeIn: {
            type: String,
            enum: CarMadeIn,
            required: true,
        },

        carBrand: {
            type: String,
            enum: CarBrand,
            required: true,
        },

        carGroup: {
            type: String,
            enum: CarGroup,
            required: true,
        },

        carTitle: {
            type: String,
            required: true,
        },

        carPrice: {
            type: Number,
            required: true,
        },

        carBarter: {
            type: Boolean,
            required: true,
        },

        carRent: {
            type: Boolean,
            required: true,
        },

        carLocation: {
            type: String,
            enum: CarLocation,
            required: true,
        },

        carAddress: {
            type: String,
            required: true,
        },

        carModel: {
            type: String,
            required: true,
        },

        carTuning: {
            type: String,
            enum: CarTuning,
        },

        carTuningType: {
            type: String,
            enum: CarTuningType,
        },

        carMileage: {
            type: Number,
            required: true,
        },

        carFuellType: {
            type: String,
            enum: CarFuelType,
            required: true,
        },

        carTransmission: {
            type: String,
            enum: CarTransmission,
            required: true,
        },

        carDriveType: {
            type: String,
            enum: CarDriveType,
            required: true,
        },

        carYear: {
            type: Number,
            required: true,
        },

        carEngineSize: {
            type: Number,
            required: true,
        },

        carDoor: {
            type: Number,
        },

        carColor: {
            type: String,
            required: true,
        },

        carCylinders: {
            type: Number,
        },

        carFullFuel: {
            type: Number,
            required: true,
        },

        carMpgHw: {
            type: Number,
            required: true,
        },

        carMpgCity: {
            type: Number,
            required: true,
        },

        carMaxSpeed: {
            type: Number,
            required: true,
        },

        carHundredSpeed: {
            type: Number,
        },

        carHorsePower: {
            type: Number,
            required: true,
        },

        carLength: {
            type: Number,
        },

        carHeigth: {
            type: Number,

        },

        carBallonSize: {
            type: Number,
        },

        carWidth: {
            type: Number,
        },

        carSeatsUp: {
            type: Number,
        },

        carWeigth: {
            type: Number,
        },

        carLoadWeight: {
            type: Number,
        },

        carTorque: {
            type: Number,
        },

        carWheelBase: {
            type: Number,
        },

        carAutoBrack: {
            type: Boolean,
            default: false,
        },

        carCruiseControl: {
            type: Boolean,
            default: false,
        },

        carESC: {
            type: Boolean,
            default: false,
        },

        carAutonomuosDrive: {
            type: Boolean,
            default: false,
        },

        carExteriorLight: {
            type: String,
            default: false,
        },

        carPanoramicSunroof: {
            type: Boolean,
            default: false,
        },

        carHeatedSeat: {
            type: Boolean,
            default: false,
        },

        carCooledSeats: {
            type: Boolean,
            default: false,
        },

        carTouchscreenDisplay: {
            type: Boolean,
            default: false,
        },

        carAutoHeadLight: {
            type: Boolean,
            default: false,
        },

        carStarStop: {
            type: Boolean,
            default: false,
        },

        carNoiseCancellation: {
            type: Boolean,
            default: false,
        },

        carRemoteKeyless: {
            type: Boolean,
            default: false,
        },

        carLaneDW: {
            type: Boolean,
            default: false,
        },

        carBlindSpotMonitoring: {
            type: Boolean,
            default: false,
        },

        carRearCrossTrafficAlert: {
            type: Boolean,
            default: false,
        },

        carApplePlay: {
            type: Boolean,
            default: false,
        },

        carAndroidAuto: {
            type: Boolean,
            default: false,
        },

        carVoiceControl: {
            type: Boolean,
            default: false,
        },

        carBluetoothConnectivity: {
            type: Boolean,
            default: false,
        },

        carWirelessCharging: {
            type: Boolean,
            default: false,
        },

        carParkingAssist: {
            type: Boolean,
            default: false,
        },

        carSurroundViewCamera: {
            type: Boolean,
            default: false,
        },

        carFrontSensors: {
            type: Boolean,
            default: false,
        },

        carRearSensors: {
            type: Boolean,
            default: false,
        },

        carRecordCamera: {
            type: Boolean,
            default: false,
        },

        carHeadsUpDisplay: {
            type: Boolean,
            default: false,
        },

        carClimateControl: {
            type: Boolean,
            default: false,
        },

        carAdjustableSeats: {
            type: Boolean,
            default: false,
        },

        carMemorySeats: {
            type: Boolean,
            default: false,
        },

        carPowertrain: {
            type: Boolean,
            default: false,
        },

        carRegenerativeBracking: {
            type: Boolean,
            default: false,
        },

        carTractionControl: {
            type: Boolean,
            default: false,
        },

        carStabilityControl: {
            type: Boolean,
            default: false,
        },

        carHillStartAssist: {
            type: Boolean,
            default: false,
        },

        carTirePressureSystem: {
            type: Boolean,
            default: false,
        },

        carPushButton: {
            type: Boolean,
            default: false,
        },

        carViews: {
            type: Number,
            default: 0,
        },

        carLikes: {
            type: Number,
            default: 0,
        },

        carComments: {
            type: Number,
            default: 0,
        },

        carRank: {
            type: Number,
            default: 0,
        },

        carImages: {
            type: [String],
            required: true,
        },

        carVideos: {
            type: [String],
        },

        carDesc: {
            type: String,
        },

        memberId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Member',
        },

        delaerId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Dealer',
        },

        soldAt: {
            type: Date,
        },

        deletedAt: {
            type: Date,
        },

        constructedAt: {
            type: Date,
        },
    },
    { timestamps: true, collection: 'cars' },
);

CarSchema.index({ carType: 1, carLocation: 1, carTitle: 1, carPrice: 1, carBody: 1 }, { unique: true });

export default CarSchema;