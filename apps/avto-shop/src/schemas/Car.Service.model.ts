import { Schema } from 'mongoose';
import { CarServiceLocation, CarServiceStatus, CarServiceType } from '../libs/enums/car-service.enum';

const CarServiceSchema = new Schema(
    {

        carServiceStatus: {
            type: String,
            enum: CarServiceStatus,
            default: CarServiceStatus.ACTIVE,
        },

        carServiceTitle: {
            type: String,
            required: true,
        },

        carServicePassword: {
            type: String,
            required: true,
        },

        carServiceType: {
            type: String,
            enum: CarServiceType,
            required: true,
        },

        carServiceLocation: {
            type: String,
            enum: CarServiceLocation,
            required: true,
        },

        carServiceAddress: {
            type: String,
            required: true,
        },

        carServicePhone: {
            type: Number,
            required: true,
        },

        carServicePhone2: {
            type: Number,
        },

        carServcieEmail: {
            type: String,
        },

        carServiceKakaoTalk: {
            type: String,
        },

        carServiceImage: {
            type: String,
            required: true,
        },

        carServiceImages: {
            type: [String],
            required: true,
        },

        carServiceShortDesc: {
            type: String,
            required: true,
        },

        carServiceDesc: {
            type: String,
        },

        carServiceOpenAt: {
            type: Number,
            required: true,
        },

        carServiceCloseAt: {
            type: Number,
            required: true,
        },

        carServiceWeekendOpenAt: {
            type: Number,
        },

        carServiceWeekendCloseAt: {
            type: Number,
        },

        carOilChange: {
            type: Boolean,
            default: false,
        },

        carAlignment: {
            type: Boolean,
            default: false,
        },

        carTireChange: {
            type: Boolean,
            default: false,
        },

        carBrakeCheck: {
            type: Boolean,
            default: false,
        },

        carBatteryCheck: {
            type: Boolean,
            default: false,
        },

        carTireBalance: {
            type: Boolean,
            default: false,
        },

        carSuspension: {
            type: Boolean,
            default: false,
        },

        carAirCondition: {
            type: Boolean,
            default: false,
        },

        carTransmissionCheck: {
            type: Boolean,
            default: false,
        },

        carEngineDiagnostic: {
            type: Boolean,
            default: false,
        },

        carExhaust: {
            type: Boolean,
            default: false,
        },

        carDetailing: {
            type: Boolean,
            default: false,
        },

        carWindshield: {
            type: Boolean,
            default: false,
        },

        carTimingBelt: {
            type: Boolean,
            default: false,
        },

        carChainReplacement: {
            type: Boolean,
            default: false,
        },

        carMemberShipBasic: {
            type: Number,
            default: 0,
        },

        carMemberShipStandard: {
            type: Number,
            default: 0,
        },

        carMemberShipPremium: {
            type: Number,
            default: 0,
        },

        carServiceComfort: {
            type: Number,
            default: 0,
        },

        carServiceReliability: {
            type: Number,
            default: 0,
        },

        carServiceFast: {
            type: Number,
            default: 0,
        },

        carServiceValue: {
            type: Number,
            default: 0,
        },

        memberId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Member',
        },
    },
    { timestamps: true, collection: 'carservices' },
);

CarServiceSchema.index({ carServiceTitle: 1, carServiceAddress: 1, carServiceType: 1 }, { unique: true });

export default CarServiceSchema;