import { registerEnumType } from '@nestjs/graphql';

export enum ViewGroup {
	MEMBER = 'MEMBER',
	CAR = 'CAR',
	ARTICLE = 'ARTICLE',
	PRODUCT = 'PRODUCT',
	DEALER = 'DEALER',
}
registerEnumType(ViewGroup, {
	name: 'ViewGroup',
});
