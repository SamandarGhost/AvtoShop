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
        },

        dealerCarService: {
            type: Boolean,
        },

        dealerTradeIn: {
            type: Boolean,
        },

        dealerCustomization: {
            type: Boolean,
        },

        dealerWarranties: {
            type: Number,
        },

        dealerParts: {
            type: Boolean,
        },

        dealerAccessories: {
            type: Boolean,
        },

        dealerCarWash: {
            type: Boolean,
        },

        dealerCarDetailing: {
            type: Boolean,
        },

        dealerCarTestDrive: {
            type: Boolean,
        },

        dealerCarDelivery: {
            type: Boolean,
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
            required: true,
        },

        dealerOpenSunday: {
            type: Number,
            require: true,
        },

        dealerCloseSunday: {
            type: Number,
            required: true,
        },

        dealerOpenSaturday: {
            type: Number,
            require: true,
        },

        dealerCloseSaturday: {
            type: Number,
            required: true,
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
            default: '',
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