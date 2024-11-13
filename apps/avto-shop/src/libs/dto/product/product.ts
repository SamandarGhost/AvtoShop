import { Field, Int, ObjectType } from "@nestjs/graphql";
import { ObjectId } from "mongoose";
import { ProductStatus, ProductType } from "../../enums/product.enum";
import { TotalCounter } from "../member/member";



@ObjectType()
export class Product {

    @Field(() => String)
    _id: ObjectId;

    @Field(() => ProductType)
    productType: ProductType;

    @Field(() => ProductStatus)
    productStatus: ProductStatus;

    @Field(() => String)
    productTitle: string;

    @Field(() => Int)
    productPrice: number;

    @Field(() => Int)
    productQuantity: number;

    @Field(() => String)
    productImages: string;

    @Field(() => String, { nullable: true })
    productShortDesc?: string;

    @Field(() => String, { nullable: true })
    productDesc?: string;

    @Field(() => Int)
    productViews: number;

    @Field(() => Int)
    productLikes: number;

    @Field(() => Int)
    productComments: number;

    @Field(() => Int)
    productRank: number;

    @Field(() => String)
    carServiceId: ObjectId;

    @Field(() => Date, { nullable: true })
    deletedAt?: Date;

    @Field(() => Date)
    createdAt: Date;

    @Field(() => Date)
    updatedAt: Date;
}

@ObjectType()
export class Products {
    @Field(() => [Product])
    list: Product[];

    @Field(() => [TotalCounter], { nullable: true })
    metaCounter: TotalCounter[];
}

