import { Schema } from 'mongoose';
import { DealerBrand, DealerLocation, DealerStatus } from '../libs/enums/dealer.enum';

const DealerSchema = new Schema(
    {
        dealerTitle: {
            type: String,
        },

        dealerLocation: {
            type: String,
            enum: DealerLocation,
            required: true,
        },

        dealerBrand: {
            type: String,
            enum: DealerBrand,
            required: true,
        },

        dealerStatus: {
            type: String,
            enum: DealerStatus,
            default: DealerStatus.ACTIVE,
        },

        dealerPassword: {
            type: String,
            select: false,
            required: true,
        },

        dealerShortDesc: {
            type: String,
            required: true,
        },

        dealerLongDesc: {
            type: String,
            required: true,
        },

        dealerUsedCars: {
            type: Number,
            default: 0,
        },

        dealerNewCars: {
            type: Number,
            default: 0,
        },

        dealerFinancing: {
            type: Boolean,
            default: false,
        },

        dealerCarService: {
            type: Boolean,
            default: false,
        },

        dealerTradeIn: {
            type: Boolean,
            default: false,
        },

        dealerCustomization: {
            type: Boolean,
            default: false,
        },

        dealerWarranties: {
            type: Number,
            default: false,
        },

        dealerParts: {
            type: Boolean,
            default: false,
        },

        dealerAccessories: {
            type: Boolean,
            default: false,
        },

        dealerCarWash: {
            type: Boolean,
            default: false,
        },

        dealerCarDetailing: {
            type: Boolean,
            default: false,
        },

        dealerCarTestDrive: {
            type: Boolean,
            default: false,
        },

        dealerCarDelivery: {
            type: Boolean,
            default: false,
        },

        dealerPlusService: {
            type: String,
        },

        dealerOpenAt: {
            type: Number,
            required: true,
        },

        dealerCloseAt: {
            type: Number,
            required: true,
        },

        dealerPublicHolidays: {
            type: Boolean,
        },

        dealerOpenSunday: {
            type: Number,
        },

        dealerCloseSunday: {
            type: Number,
        },

        dealerOpenSaturday: {
            type: Number,
        },

        dealerCloseSaturday: {
            type: Number,
        },

        dealerImage: {
            type: String,
        },

        dealerImages: {
            type: [String]
        },

        dealerAddress: {
            type: String,
            required: true,
        },

        dealerPhone: {
            type: Number,
            required: true,
        },

        dealerPhone2: {
            type: Number,
        },

        dealerEmail: {
            type: String,
            required: true,
        },

        dealerCars: {
            type: Number,
            default: 0,
        },

        dealerKakaoTalk: {
            type: String,
        },

        dealerViews: {
            type: Number,
            default: 0,
        },

        dealerLikes: {
            type: Number,
            default: 0,
        },

        dealerComments: {
            type: Number,
            default: 0,
        },

        dealerArticles: {
            type: Number,
            default: 0,
        },

        dealerComfort: {
            type: Number,
            default: 0,
        },

        dealerPerformance: {
            type: Number,
            default: 0,
        },

        dealerExterior: {
            type: Number,
            default: 0,
        },

        dealerInterior: {
            type: Number,
            default: 0,
        },

        dealerReliability: {
            type: Number,
            default: 0,
        },

        dealerFast: {
            type: Number,
            default: 0,
        },

        dealerRank: {
            type: Number,
            default: 0,
        },

        dealerFollowers: {
            type: Number,
            default: 0,
        },

        deletedAt: {
            type: Date,
        },
    },
    { timestamps: true, collection: 'dealers' },
);

DealerSchema.index({ dealerTitle: 1, delaerAddress: 1, dealerPhone: 1, dealerEmail: 1 }, { unique: true });

export default DealerSchema;