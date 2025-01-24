import { Field, ObjectType } from "@nestjs/graphql";
import { ObjectId } from "mongoose";
import { NotificationGroup, NotificationStatus, NotificationType } from "../../enums/notification.enum";



@ObjectType()
export class Notification {
    @Field(() => String)
    _id: ObjectId;

    @Field(() => NotificationType)
    notificationType: NotificationType;

    @Field(() => NotificationStatus)
    notificationStatus: NotificationStatus;

    @Field(() => NotificationGroup)
    notificationGroup: NotificationGroup;

    @Field(() => String, { nullable: true })
    notificationTitle?: string;

    @Field(() => String, { nullable: true })
    notificationContent?: string;

    @Field(() => String)
    authorId: ObjectId;

    @Field(() => String, { nullable: true })
    receiverId?: ObjectId;

    @Field(() => String, { nullable: true })
    carId?: ObjectId;

    @Field(() => String, { nullable: true })
    articleId?: ObjectId;

    @Field(() => String, { nullable: true })
    commentId?: ObjectId;

    @Field(() => Date,)
    createdAt: Date;

    @Field(() => Date)
    updatedAt: Date;
};