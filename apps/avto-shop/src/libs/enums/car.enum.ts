import { registerEnumType } from '@nestjs/graphql';

export enum CarStatus {
    ACTIVE = 'ACTIVE',
    SOLD = 'SOLD',
    DELETE = 'DELETE',
}
registerEnumType(CarStatus, {
    name: 'CarStatus',
});

export enum CarType {
    NEW = 'NEW',
    USED = 'USED',
}
registerEnumType(CarType, {
    name: 'CarType',
});

export enum CarColor {
    BLACK = 'BLACK',
    WHITE = 'WHITE',
    SILVER = 'SILVER',
    GRAY = 'GRAY',
    RED = 'RED',
    BLUE = 'BLUE',
    GOLD = 'GOLD',
    DARK_GREEN = 'DARK_GREEN',
    YELLOW = 'YELLOW',
    DARK_BROWN = 'DARK_BROWN',
    BURGUNDY = 'BURGUNDY',
    NAVY_BLUE = 'NAVY_BLUE',
    BEIGE = 'BEIGE',
    LIGHT_BLUE = 'LIGHT_BLUE',
    BRONZE = 'BRONZE',
    OTHER = 'OTHER',
}
registerEnumType(CarColor, {
    name: 'CarColor',
});

export enum CarTuningType {
    EXTERIOR = 'EXTERIOR',
    PERFORMANCE = 'PERFORMANCE',
    SUSPENSION = 'SUSPENSION',
    INTERIOR = 'INTERIOR',
    SAFETY = 'SAFETY',
    PERSONALIZATION = 'PERSONALIZATION',
    UTILITY = 'UTILITY',
}
registerEnumType(CarTuningType, {
    name: 'CarTuningType',
});

export enum CarSort {
    ELECTRIC = 'ELECTRIC',
    FUEL = 'FUEL',
    HYBRID = 'HYBRID',
}
registerEnumType(CarSort, {
    name: 'CarSort',
});

export enum CarFuelType {
    GASOLINE = 'GASOLINE',
    DIESEL = 'DIESEL',
    ELECTRIC = 'ELECTRIC',
    HYBRID = 'HYBRID',
    CNG = 'CNG',
    LPG = 'LPG',
}
registerEnumType(CarFuelType, {
    name: 'CarFuelType',
});

export enum CarTransmission {
    MANULA = 'MANUAL',
    AUTOMATIC = 'AUTOMATIC',
    CVT = 'CVT',
    DUAL_CLUTCH = 'DUAL_CLUTCH',
    SEMI_AUTOMATIC = 'SEMI_AUTOMATIC',
}
registerEnumType(CarTransmission, {
    name: 'CarTransmission',
});

export enum CarDriveType {
    FRONT_WHEEL_D = 'FRONT_WHEEL_D',
    REAR_WHEEL_D = 'REAR_WHEEL_D',
    ALL_WHEEL_D = 'ALL_WHEEL_D',
    FOUR_WHEEL_D = 'FOUR_WHEEL_D',
}
registerEnumType(CarDriveType, {
    name: 'CarDriveType',
});

export enum CarBody {
    MICRO = 'MICRO',
    HATCHBACK = 'HATCHBACK',
    CROSSOVER = 'CROSSOVER',
    SEDAN = 'SEDAN',
    COUPE = 'COUPE',
    COUPE_SUV = 'COUPE_SUV',
    SUV = 'SUV',
    OFF_ROADER = 'OFF_ROADER',
    PICK_UP = 'PICK_UP',
    MUV = 'MUV',
    WAGON = 'WAGON',
    VAN = 'VAN',
    SPORT = 'SPORT',
    CABRIOLET = 'CABRIOLET',
    ROADSTER = 'ROADSTER',
    LIMOUSINE = 'LIMOUSINE',
    FORMULA_1 = 'FORMULA_1',
    MUSCLE = 'MUSCLE',
    HYPER = 'HYPER',
}
registerEnumType(CarBody, {
    name: 'CarBody',
});

export enum CarMadeIn {
    USA = 'USA',
    KOREA = 'KOREA',
    JAPAN = 'JAPAN',
    CHINA = 'CHINA',
    GERMANY = 'GERMANY',
    FRANCE = 'FRANCE',
    ITALY = 'ITALY',
    UK = 'UK',
    RUSSIA = 'RUSSIA',
    INDIA = 'INDIA',
    SWEDEN = 'SWEDEN',
    CZECHIA = 'CZECHIA',
    NETHERLANDS = 'NETHERLANDS',
    ROMANIA = 'ROMANIA',
    SPAIN = 'SPAIN',
    OTHERS = 'OTHERS',
}
registerEnumType(CarMadeIn, {
    name: 'CarMadeIn',
});

export enum CarGroup {
    LUXURY = 'LUXURY',
    SUPER_CAR = 'SUPER_CAR',
    SPORT = 'SPORT',
    FAMILY = 'FAMILY',
    ECONOMY = 'ECONOMY',
    LAND_CAR = 'LAND_CAR',
    CITY_CAR = 'CITY_CAR',
}
registerEnumType(CarGroup, {
    name: 'Cargroup',
});

export enum CarLocation {
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
registerEnumType(CarLocation, {
    name: 'CarLocation',
});

export enum CarBrand {
    HYUNDAI = 'HYUNDAI',
    KIA = 'KIA',
    GENESIS = 'GENESIS',
    SSANGYONG = 'SSANGYONG',
    TESLA = 'TESLA',
    TOYOTA = 'TOYOTA',
    BYD = 'BYD',
    ROLLS_ROYCE = 'ROLLS_ROYCE',
    BENTLEY = 'BENTLEY',
    ASTON_MARTIN = 'ASTON_MARTIN',
    JAGUAR = 'JAGUAR',
    LAND_ROVER = 'LAND_ROVER',
    BMW = 'BMW',
    MERCEDES_BENZ = 'MERCEDES_BENZ',
    AUDI = 'AUDI',
    PORSCHE = 'PROSCHE',
    MASERATI = 'MASERATI',
    LEXUS = 'LEXUS',
    CADILLAC = 'CADILLAC',
    LINCOLN = 'LINCOLN',
    ALFA_ROMEO = 'ALFA_ROMEO',
    VOLVO = 'VOLVO',
    PAGANI = 'PAGANI',
    KOENIGSEGG = 'KOENIGSEGG',
    MCLAREN = 'MCLAREN',
    FERRARI = 'FERRARI',
    LAMBORGHINI = 'LAMBORGHINI',
    CHEVROLET = 'CHEVROLET',
    NISSAN = 'NISSAN',
    FORD_MUSTANG = 'FORD_MUSTANG',
    CATERHAM = 'CATERHAM',
    SPYKER = 'SPYKER',
    ZAGATO = 'ZAGATO',
    GARDON_MURRAY = 'GARDON_MURRAY',
    LOTUS = 'LOTUS',
    DODGE_VIPER = 'DODGE_VIPER',
    BUGATTI = 'BUGATTI',
    FORD_GT = 'FORD_GT',
    ZENVO = 'ZENVO',
    SSC_TUATARA = 'SSC-TUATARA',
    RIMAC = 'RIMAC',
    NOBLE = 'NOBLE',
    NIO = 'NIO',
    XPENG = 'XPENG',
    RIVIAN = 'RIVIAN',
    LUCID = 'LUCID',
    POLESTAR = 'PLESTAR',
    FISKER = 'FISKER',
    BOLLINGER = 'BOLLINGER',
    FARADAY_FUTURE = 'FARADAY_FUTURE',
    HONDA = 'HONDA',
    FORD = 'FORD',
    PEUGEOT = 'PEUGEOT',
    RENAULT = 'RENAULT',
    MINI = 'MINI',
    FIAT = 'FIAT',
    SUZUKI = 'SUZUKI',
    CITROEN = 'CITROEN',
    MAZDA = 'MAZDA',
    SKODA = 'SKODA',
    SEAT = 'SEAT',
    TATA = 'TATA',
    RANGE_ROVER = 'RANGE_ROVER',
    JEEP = 'JEEP',
    BUICK_LACROSSE = 'BUICK_LACROSSE',
    RAM = 'RAM',
    GMC = 'GMC',
    ISUZU = 'ISUZU',
    VOLKSWAGEN = 'VOLKSWAGEN',
    MITSUBISHI = 'MITSUBISHI',
    SUBARU = 'SUBARU',
    ACURA = 'ACURA',
    INFINITI = 'INFINITI',
    CHERY = 'CHERY',
    HUMMER = 'HUMMER',
    OPEL = 'OPEL',
    ZEEKR = 'ZEEKR',
    OTHER = 'OTHER',
}
registerEnumType(CarBrand, {
    name: 'CarBrand',
});