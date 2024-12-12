import { registerEnumType } from '@nestjs/graphql';

export enum ArticleCategory {
	FREE = 'FREE',
	RECOMMEND = 'RECOMMEND',
	NEWS = 'NEWS',
	HUMOR = 'HUMOR',
	OVERVIEW = 'OVERVIEW',
	HELPFUL = 'HELPFULL',
}
registerEnumType(ArticleCategory, {
	name: 'ArticleCategory',
});

export enum ArticleStatus {
	ACTIVE = 'ACTIVE',
	DELETE = 'DELETE',
}
registerEnumType(ArticleStatus, {
	name: 'ArticleStatus',
});
