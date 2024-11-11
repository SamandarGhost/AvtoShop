import { Field, InputType, Int } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional, Length } from "class-validator";
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
    @Length(6, 16)
    @Field(() => String, { nullable: true })
    dealerPassword?: string;

    @IsOptional()
    @Field(() => Int, { nullable: true })
    dealerPhone?: number;

    @IsOptional()
    @Field(() => Int, { nullable: true })
    dealerPhone2?: number;

    @IsOptional()
    @Field(() => DealerLocation, { nullable: true })
    dealerLocation?: DealerLocation;

    @IsOptional()
    @Field(() => String, { nullable: true })
    dealerAddress?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    dealerEmail?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    dealerKakaoTalk?: string;

    @IsOptional()
    @Field(() => DealerBrand, { nullable: true })
    dealerBrand?: DealerBrand;

    @IsOptional()
    @Field(() => String, { nullable: true })
    dealerShortDesc?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    dealerLongDesc?: string;

    @IsOptional()
    @Field(() => Int, { nullable: true })
    dealerOpenAt?: number;

    @IsOptional()
    @Field(() => Int, { nullable: true })
    dealerCloseAt?: number;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    dealerPublicHolidays?: boolean;

    @IsOptional()
    @Field(() => Int, { nullable: true })
    dealerOpenSunday?: number;

    @IsOptional()
    @Field(() => Int, { nullable: true })
    dealerOpenSaturday?: number;

    @IsOptional()
    @Field(() => Int, { nullable: true })
    dealerCloseSunday?: number;

    @IsOptional()
    @Field(() => Int, { nullable: true })
    dealerCloseSaturday?: number;

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
    dealerCarWash?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    dealerCarDetailing?: boolean;

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