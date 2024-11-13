import { Field, InputType, Int } from "@nestjs/graphql";
import { IsIn, IsInt, IsNotEmpty, IsOptional, Length, Min } from "class-validator";
import { ProductStatus, ProductType } from "../../enums/product.enum";
import { ObjectId } from "mongoose";
import { availableProductSorts } from "../../config";
import { Direction } from "../../enums/common.enum";



@InputType()
export class ProductInput {

    @IsNotEmpty()
    @Field(() => ProductType)
    productType: ProductType;

    @IsNotEmpty()
    @Field(() => String)
    productTitle: string;

    @IsNotEmpty()
    @IsInt()
    @Field(() => Int)
    productPrice: number;

    @IsOptional()
    @IsInt()
    @Min(1)
    @Field(() => Int, { nullable: true })
    productQuantity?: number;

    @IsNotEmpty()
    @Field(() => [String])
    productImages: string[]

    @IsOptional()
    @Length(20, 100)
    @Field(() => String)
    productShortDesc: string;

    @IsOptional()
    @Length(20, 500)
    @Field(() => String)
    productDesc: string;
}

@InputType()
export class PriceRange {

    @IsInt()
    @Field(() => Int)
    minPrice: number;

    @IsInt()
    @Field(() => Int)
    maxPrice: number;
}

@InputType()
class PISearch {
    @IsOptional()
    @Field(() => String, { nullable: true })
    carServiceId?: ObjectId;

    @IsOptional()
    @Field(() => [ProductType], { nullable: true })
    productTypeList?: ProductType[];

    @IsOptional()
    @Field(() => PriceRange, { nullable: true })
    priceRange?: PriceRange;

    @IsOptional()
    @Field(() => String, { nullable: true })
    text?: string;
}

@InputType()
export class ProductsInquiry {
    @IsNotEmpty()
    @Min(1)
    @IsInt()
    @Field(() => Int)
    page: number;

    @IsNotEmpty()
    @Min(1)
    @IsInt()
    @Field(() => Int)
    limit: number;

    @IsOptional()
    @IsIn(availableProductSorts)
    @Field(() => String, { nullable: true })
    sort?: string;

    @IsOptional()
    @Field(() => Direction, { nullable: true })
    direction?: Direction;

    @IsNotEmpty()
    @Field(() => PISearch)
    search: PISearch;
}

@InputType()
class CSPISearch {
    @IsOptional()
    @Field(() => ProductStatus, { nullable: true })
    productStatus?: ProductStatus;
}

@InputType()
export class CarServiceProductsInquiry {
    @IsNotEmpty()
    @Min(1)
    @IsInt()
    @Field(() => Int)
    page: number;

    @IsNotEmpty()
    @Min(1)
    @IsInt()
    @Field(() => Int)
    limit: number;

    @IsOptional()
    @IsIn(availableProductSorts)
    @Field(() => String, { nullable: true })
    sort?: string;

    @IsOptional()
    @Field(() => Direction, { nullable: true })
    direction?: Direction;

    @IsNotEmpty()
    @Field(() => CSPISearch)
    search: CSPISearch;
}

@InputType()
class ALPISearch {
    @IsOptional()
    @Field(() => ProductStatus, { nullable: true })
    productStatus?: ProductStatus;

    @IsOptional()
    @Field(() => [ProductType], { nullable: true })
    productLocationList?: ProductType[];
}

@InputType()
export class AllProductsInquiry {
    @IsNotEmpty()
    @Min(1)
    @IsInt()
    @Field(() => Int)
    page: number;

    @IsNotEmpty()
    @Min(1)
    @IsInt()
    @Field(() => Int)
    limit: number;

    @IsOptional()
    @IsIn(availableProductSorts)
    @Field(() => String, { nullable: true })
    sort?: string;

    @IsOptional()
    @Field(() => Direction, { nullable: true })
    direction?: Direction;

    @IsNotEmpty()
    @Field(() => ALPISearch)
    search: ALPISearch;
}