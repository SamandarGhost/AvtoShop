import { registerEnumType } from '@nestjs/graphql';

export enum SaveGroup {
    CAR = 'CAR',
    PRODUCT = 'PRODUCT',
}
registerEnumType(SaveGroup, {
    name: 'SaveGroup',
});