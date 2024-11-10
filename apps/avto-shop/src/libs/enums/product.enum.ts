import { registerEnumType } from "@nestjs/graphql";

export enum ProductType {
    ACCESSORIES = 'ACCESSORIES',
    BODY_KIT = 'BODY_KIT',
    INTERIOR = 'INTERIOR',
    EXTERIOR = 'EXTERIOR',
    SOUND = 'SOUND',
    FUEL_SYSTEM = 'FUEL_SYSTEM',
    WHEEL = 'WHEEL',
    TIRE = 'TIRE',
    OIL = 'OIL',
    FILTER = 'FILTER',
    OTHER = 'OTHER',
}
registerEnumType(ProductType, {
    name: 'ProductType',
});

export enum ProductStatus {
    ACTIVE = 'ACTIVE',
    SOLD = 'SOLD',
    DELETE = 'DELETE',
}
registerEnumType(ProductStatus, {
    name: 'ProductStatus',
});