import { registerEnumType } from '@nestjs/graphql';

export enum ViewGroup {
	MEMBER = 'MEMBER',
	CAR = 'CAR',
	ARTICLE = 'ARTICLE',
	PRODUCT = 'PRODUCT',
	DEALER = 'DEALER',
	CAR_SERVICE = 'CAR_SERVICE',
}
registerEnumType(ViewGroup, {
	name: 'ViewGroup',
});
