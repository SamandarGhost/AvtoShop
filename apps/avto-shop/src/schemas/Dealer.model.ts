import { Schema } from 'mongoose';
import { DealerBrand, DealerLocation } from '../libs/enums/dealer.enum';

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

        dealerShortDesc: {
            type: String,
            required: true,
        },

        dealerLongDesc: {
            type: String,
            required: true,
        },

        dealerUsedCars: {
            type: Boolean,
        },

        dealerNewCars: {
            type: Boolean,
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

        dealerOpenAt: {
            type: Number,
            required: true,
        },

        dealerCloseAt: {
            type: Number,
            required: true,
        },

        dealerPublicHolidays: {
            type: Number,
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

        dealerAddress: {
            type: String,
            required: true,
        },

        dealerPhone: {
            type: Number,
            required: true,
        },

        dealerEmail: {
            type: String,
            required: true,
        },

        dealerCars: {
            type: Number,
            default: 0,
        },

        dealerKakaoEmail: {
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

        dealerRank: {
            type: Number,
            default: 0,
        }
    },
    { timestamps: true, collection: 'dealers' },
);

DealerSchema.index({ dealerTitle: 1, delaerAddress: 1, dealerPhone: 1, dealerEmail: 1 }, { unique: true });

export default DealerSchema;