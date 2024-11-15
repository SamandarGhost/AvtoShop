import { registerEnumType } from "@nestjs/graphql";


export enum MemberType {
    USER = 'USER',
    AGENT = 'AGENT',
    ADMIN = 'ADMIN',
    DEALER = 'DEALER',
    SERVICE = 'SERVICE',
    SELLER = 'SELLER',
};
registerEnumType(MemberType, {
    name: 'MemberType',
});

export enum MemberStatus {
    ACTIVE = 'ACTIVE',
    DELETE = 'DELETE',
    BLOCK = 'BLOCK',
};
registerEnumType(MemberStatus, {
    name: 'MemberStatus',
});

export enum MemberAuthType {
    PHONE = 'PHONE',
    EMAIL = 'EMAIL',
    KAKAOTALK = 'KAKAOTALK',
    TELEGRAM = 'TELEGRAM',
};
registerEnumType(MemberAuthType, {
    name: 'MemberAuthType',
});