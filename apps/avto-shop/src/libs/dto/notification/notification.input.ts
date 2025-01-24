import { Field, InputType, Int } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional, Min } from "class-validator";
import { NotificationGroup, NotificationType } from "../../enums/notification.enum";
import { ObjectId } from "mongoose";




@InputType()
export class NotificationInput {
    @IsNotEmpty()
    @Field(() => NotificationType)
    notificationType: NotificationType;

    @IsNotEmpty()
    @Field(() => NotificationGroup)
    notificationGroup: NotificationGroup;

    @IsOptional()
    @Field(() => String, { nullable: true })
    notificationTitle?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    notificationContent?: string;

    @IsOptional()
    @Field(() => String)
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

@InputType()
export class NotificationInquiry {
    @IsNotEmpty()
    @Min(1)
    @Field(() => Int)
    page: number;

    @IsNotEmpty()
    @Min(1)
    @Field(() => Int)
    limit: number;
}