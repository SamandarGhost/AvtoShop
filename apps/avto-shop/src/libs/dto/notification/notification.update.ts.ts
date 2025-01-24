import { Field, InputType, Int } from "@nestjs/graphql";
import { IsOptional } from "class-validator";
import { NotificationGroup, NotificationStatus, NotificationType } from "../../enums/notification.enum";
import { ObjectId } from "mongoose";




@InputType()
export class NotificationUpdate {

    @IsOptional()
    @Field(() => NotificationType, { nullable: true })
    notificationType?: NotificationType;

    @IsOptional()
    @Field(() => NotificationStatus, { nullable: true })
    notificationStatus?: NotificationStatus;

    @IsOptional()
    @Field(() => NotificationGroup, { nullable: true })
    notificationGroup?: NotificationGroup;

    @IsOptional()
    @Field(() => String, { nullable: true })
    notificationTitle?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    notificationContent?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    authorId?: ObjectId;

    @IsOptional()
    @Field(() => String, { nullable: true })
    receiverId?: ObjectId;

    @IsOptional()
    @Field(() => String, { nullable: true })
    carId?: ObjectId;

    @IsOptional()
    @Field(() => String, { nullable: true })
    articleId?: ObjectId;

    @IsOptional()
    @Field(() => String, { nullable: true })
    commentId?: ObjectId;

}