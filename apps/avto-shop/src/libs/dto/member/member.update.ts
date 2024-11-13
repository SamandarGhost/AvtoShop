import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional, Length } from "class-validator";
import { MemberStatus, MemberType } from "../../enums/member.enum";



@InputType()
export class MemberUpdate {


    @IsNotEmpty()
    @Field(() => String)
    _id: string;

    @IsOptional()
    @Field(() => MemberType, { nullable: true })
    memberType?: MemberType;

    @IsOptional()
    @Field(() => MemberStatus, { nullable: true })
    memberStatus?: MemberStatus;

    @IsOptional()
    @Length(3, 12)
    @Field(() => String, { nullable: true })
    memberNick?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    memberPhone?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    memberPhone2?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    memberEmail?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    memberKakaoTalk?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    memberYoutube?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    memberInstagram?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    memberFacebook?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    memberTikTok?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    memberNaverBlog?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    memberXcom?: string;

    @IsOptional()
    @Length(5, 12)
    @Field(() => String, { nullable: true })
    memberPassword?: string;

    @IsOptional()
    @Length(3, 100)
    @Field(() => String, { nullable: true })
    memberFullName?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    memberAddress?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    memberImage?: string;

    @IsOptional()
    @Field(() => String, { nullable: true })
    memberDesc?: string;

    deletedAt?: Date;

}