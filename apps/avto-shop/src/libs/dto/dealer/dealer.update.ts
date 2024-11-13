import { Field, InputType, Int } from "@nestjs/graphql";
import { IsInt, IsNotEmpty, IsOptional, Length } from "class-validator";
import { DealerBrand, DealerLocation, DealerStatus } from "../../enums/dealer.enum";


@InputType()
export class DealerUpdate {

    @IsNotEmpty()
    @Field(() => String)
    _id: string;

    @IsOptional()
    @Field(() => DealerStatus, { nullable: true })
    dealerStatus?: DealerStatus;

    @IsOptional()
    @Length(3, 30)
    @Field(() => String, { nullable: true })
    dealerTitle?: string;

    @IsOptional()
    @Field(() => DealerBrand, { nullable: true })
    dealerBrand?: DealerBrand;

    @IsOptional()
    @Length(6, 16)
    @Field(() => String, { nullable: true })
    dealerPassword?: string;

    @IsOptional()
    @Field(() => DealerLocation, { nullable: true })
    dealerLocation?: DealerLocation;

    @IsOptional()
    @Field(() => String, { nullable: true })
    dealerAddress?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    dealerImage?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    dealerImages?: string;

    @IsOptional()
    @IsInt()
    @Field(() => String, { nullable: true })
    dealerPhone?: string;

    @IsOptional()
    @IsInt()
    @Field(() => String, { nullable: true })
    dealerPhone2?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    dealerEmail?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    dealerKakaoTalk?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    dealerYoutube?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    dealerInstagram?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    dealerFacebook?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    dealerTikTok?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    dealerNaverBlog?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    dealerXcom?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    dealerShortDesc?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    dealerLongDesc?: string;

    @IsOptional()
    @IsInt()
    @Field(() => String, { nullable: true })
    dealerOpenAt?: string;

    @IsOptional()
    @IsInt()
    @Field(() => String, { nullable: true })
    dealerCloseAt?: string;

    @IsOptional()
    @IsInt()
    @Field(() => String, { nullable: true })
    dealerOpenSunday?: string;

    @IsOptional()
    @IsInt()
    @Field(() => String, { nullable: true })
    dealerCloseSunday?: string;

    @IsOptional()
    @IsInt()
    @Field(() => String, { nullable: true })
    dealerOpenSaturday?: string;

    @IsOptional()
    @IsInt()
    @Field(() => String, { nullable: true })
    dealerCloseSaturday?: string;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    dealerPublicHolidays?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    dealerFinancing?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    dealerCarService?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    dealerTradeIn?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    dealerCustomization?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    dealerWarranties?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    dealerParts?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    dealerAccessories?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    dealerCarDetailing?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    dealerCarWash?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    dealerCarTestDrive?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    dealerCarDelivery?: boolean;

    @IsOptional()
    @Field(() => String, { nullable: true })
    dealerPlusService?: string;
}