import { Schema } from 'mongoose';
import { CarServiceLocation, CarServiceStatus, CarServiceType } from '../libs/enums/car-service.enum';

const CarServiceSchema = new Schema(
    {

        carServiceStatus: {
            type: String,
            enum: CarServiceStatus,
            default: CarServiceStatus.ACTIVE,
        },

        carServiceType: {
            type: String,
            enum: CarServiceType,
            required: true,
        },

        carServiceTitle: {
            type: String,
            required: true,
        },

        carServicePassword: {
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

        carServicePhone: {
            type: String,
            index: { unique: true, sparse: true },
            required: true,
        },

        carServicePhone2: {
            type: String,
            index: { unique: true, sparse: true },
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
            type: String,
            required: true,
        },

        carServiceCloseAt: {
            type: String,
            required: true,
        },

        carServiceWeekendOpenAt: {
            type: String,
        },

        carServiceWeekendCloseAt: {
            type: String,
        },

        carServicePublicHolidays: {
            type: Boolean,
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
            type: String,
        },

        carMemberShipStandard: {
            type: String,
        },

        carMemberShipPremium: {
            type: String,
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

        carServicePoints: {
            type: Number,
            default: 0,
        },

        carServiceRank: {
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