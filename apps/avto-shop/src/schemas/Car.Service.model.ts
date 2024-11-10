import { Schema } from 'mongoose';
import { CarServiceLocation } from '../libs/enums/car-service.enum';

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
            required: true,
        },

        carOilChange: {
            type: Boolean,
        },

        carAlignment: {
            type: Boolean,
        },

        carTireChange: {
            type: Boolean,
        },

        carBrakeCheck: {
            type: Boolean,
        },

        carTireBalance: {
            type: Boolean,
        },

        carSuspension: {
            type: Boolean,
        },

        carAirCondition: {
            type: Boolean,
        },

        carTransmissionCheck: {
            type: Boolean,
        },

        carEngineDiagnostic: {
            type: Boolean,
        },

        carExhaust: {
            type: Boolean,
        },

        carDetailing: {
            type: Boolean,
        },

        carWindshield: {
            type: Boolean,
        },

        carTimingBelt: {
            type: Boolean,
        },

        carChainReplacement: {
            type: Boolean,
        },

        carServiceMemberShipPrice: {
            type: Number,
            required: true,
        },

        carServiceDesc: {
            type: String,
            required: true,
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