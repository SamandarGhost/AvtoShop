import { registerEnumType } from '@nestjs/graphql';

export enum LikeGroup {
	MEMBER = 'MEMBER',
	CAR = 'CAR',
	PRODUCT = 'PRODUCT',
	ARTICLE = 'ARTICLE',
	DEALER = 'DEALER',
	CAR_SERVICE = 'CAR_SERVICE',
}
registerEnumType(LikeGroup, {
	name: 'LikeGroup',
});
