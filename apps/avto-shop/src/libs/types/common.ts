import { ObjectId } from "mongoose";
import { Car } from "../dto/car/car";
import { Product } from "../dto/product/product";
import { InputType } from "@nestjs/graphql";

export interface T {
    [key: string]: any
}

export interface StatisticModifier {
    _id: ObjectId;
    targetKey: string;
    modifier: number;
}

@InputType()
export class ITEMS {
    list: (Car | Product)[];
    metaCounter: { total: number };
}

