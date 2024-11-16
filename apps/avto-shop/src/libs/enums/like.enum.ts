import { registerEnumType } from '@nestjs/graphql';

export enum LikeGroup {
	MEMBER = 'MEMBER',
	CAR = 'CAR',
	PRODUCT = 'PRODUCT',
	ARTICLE = 'ARTICLE',
	DEALER = 'DEALER',
}
registerEnumType(LikeGroup, {
	name: 'LikeGroup',
});
