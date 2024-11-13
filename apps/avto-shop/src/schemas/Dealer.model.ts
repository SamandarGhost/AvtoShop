import { Schema } from 'mongoose';
import { DealerBrand, DealerLocation, DealerStatus } from '../libs/enums/dealer.enum';

const DealerSchema = new Schema(
    {

        dealerStatus: {
            type: String,
            enum: DealerStatus,
            default: DealerStatus.ACTIVE,
        },

        dealerTitle: {
            type: String,
        },

        dealerBrand: {
            type: String,
            enum: DealerBrand,
            required: true,
        },

        dealerPassword: {
            type: String,
            select: false,
            required: true,
        },

        dealerLocation: {
            type: String,
            enum: DealerLocation,
            required: true,
        },

        dealerAddress: {
            type: String,
            required: true,
        },

        dealerImage: {
            type: String,
            required: true,
        },

        dealerImages: {
            type: [String]
        },

        dealerPhone: {
            type: String,
            index: { unique: true, sparse: true },
            required: true,
        },

        dealerPhone2: {
            type: String,
            index: { unique: true, sparse: true },
        },

        dealerEmail: {
            type: String,
            required: true,
        },

        dealerKakaoTalk: {
            type: String,
        },

        dealerYoutube: {
            type: String,
        },

        dealerInstagram: {
            type: String,
        },

        dealerFacebook: {
            type: String,
        },

        dealerTikTok: {
            type: String,
        },

        dealerNaverBlog: {
            type: String,
        },

        dealerXcom: {
            type: String,
        },

        dealerShortDesc: {
            type: String,
            required: true,
        },

        dealerLongDesc: {
            type: String,
        },

        dealerOpenAt: {
            type: String,
            required: true,
        },

        dealerCloseAt: {
            type: String,
            required: true,
        },

        dealerOpenSunday: {
            type: String,
        },

        dealerCloseSunday: {
            type: String,
        },

        dealerOpenSaturday: {
            type: String,
        },

        dealerCloseSaturday: {
            type: String,
        },

        dealerPublicHolidays: {
            type: Boolean,
            default: false,
        },

        dealerCars: {
            type: Number,
            default: 0,
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

        dealerCarDetailing: {
            type: Boolean,
            default: false,
        },

        dealerCarWash: {
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

        dealerPoints: {
            type: Number,
            default: 0,
        },

        dealerFollowers: {
            type: Number,
            default: 0,
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

        deletedAt: {
            type: Date,
        },
    },
    { timestamps: true, collection: 'dealers' },
);

DealerSchema.index({ dealerTitle: 1, delaerAddress: 1, dealerPhone: 1, dealerEmail: 1 }, { unique: true });

export default DealerSchema;