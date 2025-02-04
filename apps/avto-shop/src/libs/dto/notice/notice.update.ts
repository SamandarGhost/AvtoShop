import { Field, ObjectType } from "@nestjs/graphql";
import { ObjectId } from "mongoose";
import { NoticeCategory, NoticeGroup, NoticeStatus } from "../../enums/notice.enum";



@ObjectType()
export class NoticeUpdate {
    @Field(() => String)
    _id: ObjectId;

    @Field(() => NoticeCategory, { nullable: true })
    noticeCategory?: NoticeCategory;

    @Field(() => NoticeStatus, { nullable: true })
    noticeStatus?: NoticeStatus;

    @Field(() => NoticeGroup, { nullable: true })
    noticeGroup?: NoticeGroup;

    @Field(() => String, { nullable: true })
    noticeTitle?: string;

    @Field(() => String, { nullable: true })
    noticeContent?: string;
}