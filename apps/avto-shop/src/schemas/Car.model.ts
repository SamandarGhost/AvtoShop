import { Schema } from 'mongoose';
import { CarStatus, CarBody, CarType, CarSort, CarMadeIn, CarBrand, CarGroup, CarLocation, CarFuelType, CarTransmission, CarDriveType } from '../libs/enums/car.enum';

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
        },

        carCruiseControl: {
            type: Boolean,
        },

        carESC: {
            type: Boolean,
        },

        carAutonomuosDrive: {
            type: Boolean,
        },

        carExteriorLight: {
            type: String,
        },

        carPanoramicSunroof: {
            type: Boolean,
        },

        carHeatedSeat: {
            type: Boolean,
        },

        carCooledSeats: {
            type: Boolean,
        },

        carTouchscreenDisplay: {
            type: Boolean,
        },

        carAutoHeadLight: {
            type: Boolean,
        },

        carStarStop: {
            type: Boolean,
        },

        carNoiseCancellation: {
            type: Boolean,
        },

        carRemoteKeyless: {
            type: Boolean,
        },

        carLaneDW: {
            type: Boolean,
        },

        carBlindSpotMonitoring: {
            type: Boolean,
        },

        carRearCrossTrafficAlert: {
            type: Boolean,
        },

        carApplePlay: {
            type: Boolean,
        },

        carAndroidAuto: {
            type: Boolean,
        },

        carVoiceControl: {
            type: Boolean,
        },

        carBluetoothConnectivity: {
            type: Boolean,
        },

        carWirelessCharging: {
            type: Boolean,
        },

        carParkingAssist: {
            type: Boolean,
        },

        carSurroundViewCamera: {
            type: Boolean,
        },

        carFrontSensors: {
            type: Boolean,
        },

        carRearSensors: {
            type: Boolean,
        },

        carRecordCamera: {
            type: Boolean,
        },

        carHeadsUpDisplay: {
            type: Boolean,
        },

        carClimateControl: {
            type: Boolean,
        },

        carAdjustableSeats: {
            type: Boolean,
        },

        carMemorySeats: {
            type: Boolean,
        },

        carPowertrain: {
            type: Boolean,
        },

        carRegenerativeBracking: {
            type: Boolean,
        },

        carTractionControl: {
            type: Boolean,
        },

        carStabilityControl: {
            type: Boolean,
        },

        carHillStartAssist: {
            type: Boolean,
        },

        carTirePressureSystem: {
            type: Boolean,
        },

        carPushButton: {
            type: Boolean,
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