import { registerEnumType } from '@nestjs/graphql';

export enum SaveGroup {
    CAR = 'CAR',
}
registerEnumType(SaveGroup, {
    name: 'SaveGroup',
});