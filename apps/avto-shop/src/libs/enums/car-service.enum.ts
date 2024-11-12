import { registerEnumType } from "@nestjs/graphql";

export enum CarServiceStatus {
    ACTIVE = 'ACTIVE',
    DELETE = 'DELETE',
    BLOCK = 'BLOCK',
}
registerEnumType(CarServiceStatus, {
    name: 'CarServiceStatus',
})

export enum CarServiceType {
    OIL_CHANGE = 'OIL-CHANGE',
    BATTERY = 'BATTERY',
    TIRE = 'TIRE',
    BRAKE = 'BRAKE',
    ENGINE = 'ENGINE',
    SYSTEM = 'SYSTEM',
    WINDSHIELD = 'WINDSHIELD',
    AIR_CONDITION = 'AIR_CONDITION',
    BODY_CRASH = 'BODY_CRASH',
    TUNING = 'TUNING',
    OTHER = 'OTHER',
}
registerEnumType(CarServiceType, {
    name: 'CarServiceType',
});

export enum CarServiceLocation {
    SEOUL = 'SEOUL',
    BUSAN = 'BUSAN',
    INCHEON = 'INCHEON',
    DAEGU = 'DAEGU',
    DAEJEON = 'DAEJEON',
    GWANGJU = 'GWANGJU',
    ULSAN = 'ULSAN',
    SUWON = 'SUWON',
    GYEONGJU = 'GYEONGJU',
    JEONJU = 'JEONJU',
    JEJU = 'JEJU',
    CHANGWON = 'CHANGWON',
    POHANG = 'POHANG',
    CHEONAN = 'CHEONAN',
    GIMHAE = 'GIMHAE',
    CHEONGJU = 'CHEONGJU',
    WONJU = 'WONJU',
    IKSAN = 'IKSAN',
    MOKPO = 'MOKPO',
    ANDONG = 'ANDONG',
    ASAN = 'ASAN',
    ANSAN = 'ANSAN',
    PYEONGTAEK = 'PYEONGTAEK',
    YANGSAN = 'YANGSAN',
    JEONGEUP = 'JEONGEUP',
    GIMPO = 'GIMPO',
    GUNSAN = 'GUNSAN',
    GIMCHEON = 'GIMCHEON',
    GANGNEUNG = 'GANGNEUNG',
    UIJEONGBU = 'UIJEONGBU',
    ICHEON = 'ICHEON',
    PAJU = 'PAJU',
    TONGYEONG = 'TONGYEONG',
    CHUNCHEON = 'CHUNCHEON',
    SOKCHO = 'SOKCHO',
    NAJU = 'NAJU',
    GYEONGSAN = 'GYEONGSAN',
    HWASEONG = 'HWASEONG',
    YEOJU = 'YEOJU',
    SEONGNAM = 'SEONGNAM',
    OTHER = 'OTHER',
}
registerEnumType(CarServiceLocation, {
    name: 'CarServiceLocation',
});