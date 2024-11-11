import { Schema } from 'mongoose';
import { CarServiceLocation, CarServiceType } from '../libs/enums/car-service.enum';

const CarServiceSchema = new Schema(
    {
        carServiceTitle: {
            type: String,
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

        carServiceType: {
            type: String,
            enum: CarServiceType,
            required: true,
        },

        carServiceImage: {
            type: String,
            required: true,
        },

        carServiceImages: {
            type: [String],
            required: true,
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

        carMemberShipOneYear: {
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

        carServiceShortDesc: {
            type: String,
        },

        carServiceDesc: {
            type: String,
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