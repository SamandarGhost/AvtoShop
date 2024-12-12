import { registerEnumType } from '@nestjs/graphql';

export enum LikeGroup {
	MEMBER = 'MEMBER',
	CAR = 'CAR',
	ARTICLE = 'ARTICLE',
	PRODUCT = 'PRODUCT',
}
registerEnumType(LikeGroup, {
	name: 'LikeGroup',
});
