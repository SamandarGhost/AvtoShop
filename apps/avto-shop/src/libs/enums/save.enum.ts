import { registerEnumType } from '@nestjs/graphql';

export enum SaveGroup {
    CAR = 'CAR',
    PRODUCT = 'PRODUCT',
    DEALER = 'DEALER',
}
registerEnumType(SaveGroup, {
    name: 'SaveGroup',
});