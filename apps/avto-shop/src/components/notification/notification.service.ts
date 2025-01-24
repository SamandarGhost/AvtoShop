import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { NotificationInput } from "../../libs/dto/notification/notification.input";
import { T } from "../../libs/types/common";
import { Message } from "../../libs/enums/common.enum";
import { shapeIntoMongoObjectId } from "../../libs/config";
import { Notification } from "../../libs/dto/notification/notification";

@Injectable()
export class NotificationService {
    constructor(@InjectModel("Notification") private readonly notificationModel: Model<Notification>,
    ) { }

    public async createNotification(memberId: ObjectId, input: NotificationInput): Promise<Notification> {

        const {
            receiverId,
            carId,
            articleId,
            commentId,
            authorId
        } = input;
        if (receiverId) input.receiverId = shapeIntoMongoObjectId(receiverId);
        if (carId) input.carId = shapeIntoMongoObjectId(carId);
        if (articleId) input.articleId = shapeIntoMongoObjectId(articleId);
        if (commentId) input.commentId = shapeIntoMongoObjectId(commentId);
        if (authorId) input.authorId = shapeIntoMongoObjectId(authorId);

        if (memberId.toString() === input.receiverId.toString()) {
            throw new InternalServerErrorException(Message.SELF_MESSAGE_DENIED);
        }

        const result = await this.notificationModel.create(input);
        if (!result) new InternalServerErrorException(Message.BAD_REQUEST);

        return result;
    }
}
