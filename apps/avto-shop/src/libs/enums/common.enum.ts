import { registerEnumType } from "@nestjs/graphql";

export enum Message {
    SOMETHING_WENT_WRONG = 'Somethinf went wrong!',
    N0_DATA_FOUND = 'No data found!',
    CREATE_FAILED = 'Create failed!',
    UPDATE_FAILED = 'Update failed!',
    REMOVE_FAILED = 'Remove failed!',
    UPLOAD_FAILED = 'Upload failed!',
    BAD_REQUEST = 'Bad Request',
    USED_MEMBER_NICK_OR_PHONE = 'Already used member nick or phone!',

    NO_MEMBER_NICK = 'No member with that member nick!',
    BLOCKED_USER = 'You have been blocked!',
    WRONG_PASSWORD = 'Wrong password, try again!',
    NOT_AUTHENTICATED = 'You are not authenticated, please logi first!',
    TOKEN_NOT_EXIST = 'Bearer Token is not provided!',
    ONLY_SPECIFIC_ROLES_ALLOWED = 'Allowed only for members with specific role!',
    NOT_ALLOWED_REQUEST = 'Not Allowed Request!',
    PROVIDE_ALLOWED_FORMAT = 'Please provide jpg, jpeg or png images!',
    SELF_SUBSCRIPTION_DENIED = 'Self subscription in denied!',
}

export enum Direction {
    ASC = 1,
    DESC = -1,
}
registerEnumType(Direction, { name: 'Direction' });