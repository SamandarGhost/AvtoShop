import { Field, InputType, Int } from "@nestjs/graphql";
import { IsIn, IsNotEmpty, IsOptional, Length, Min } from "class-validator";
import { AuthType, Status, Type } from "../../enums/member.enum";
import { availableAgentSorts, availableMemberSorts } from "../../config";
import { Direction } from "../../enums/common.enum";




@InputType()
export class MemberInput {
    @IsNotEmpty()
    @Length(3, 12)
    @Field(() => String)
    titleNick: string;

    @IsNotEmpty()
    @Length(5, 12)
    @Field(() => String)
    password: string;

    @IsNotEmpty()
    @Field(() => String)
    phone: string;

    @IsOptional()
    @Field(() => Type, { nullable: true })
    type?: Type;

    @IsOptional()
    @Field(() => AuthType, { nullable: true })
    authType?: AuthType;
};

@InputType()
export class LoginInput {
    @IsNotEmpty()
    @Length(3, 12)
    @Field(() => String)
    titleNick: string;

    @IsNotEmpty()
    @Length(5, 12)
    @Field(() => String)
    password: string;
};

@InputType()
class AISearch {
    @IsOptional()
    @Field(() => String, { nullable: true })
    text?: string;
}

@InputType()
export class AgentsInquiry {
    @IsNotEmpty()
    @Min(1)
    @Field(() => Int)
    page: number;

    @IsNotEmpty()
    @Min(1)
    @Field(() => Int)
    limit: number;

    @IsOptional()
    @IsIn(availableAgentSorts)
    @Field(() => String, { nullable: true })
    sort?: string;

    @IsOptional()
    @Field(() => Direction, { nullable: true })
    direction?: Direction;

    @IsNotEmpty()
    @Field(() => AISearch)
    search: AISearch;
};

@InputType()
class MISearch {
    @IsOptional()
    @Field(() => Status, { nullable: true })
    status?: Status;

    @IsOptional()
    @Field(() => Type, { nullable: true })
    type?: Type;

    @IsOptional()
    @Field(() => String, { nullable: true })
    text?: string;
}

@InputType()
export class MembersInquiry {
    @IsNotEmpty()
    @Min(1)
    @Field(() => Int)
    page: number;

    @IsNotEmpty()
    @Min(1)
    @Field(() => Int)
    limit: number;

    @IsOptional()
    @IsIn(availableMemberSorts)
    @Field(() => String, { nullable: true })
    sort?: string;

    @IsOptional()
    @Field(() => Direction, { nullable: true })
    direction?: Direction;

    @IsNotEmpty()
    @Field(() => MISearch)
    search: MISearch;
};

@InputType()
export class ServicesInquiry {
    @IsNotEmpty()
    @Min(1)
    @Field(() => Int)
    page: number;

    @IsNotEmpty()
    @Min(1)
    @Field(() => Int)
    limit: number;

    @IsOptional()
    @IsIn(availableAgentSorts)
    @Field(() => String, { nullable: true })
    sort?: string;

    @IsOptional()
    @Field(() => Direction, { nullable: true })
    direction?: Direction;
};

@InputType()
export class DealersInquiry {
    @IsNotEmpty()
    @Min(1)
    @Field(() => Int)
    page: number;

    @IsNotEmpty()
    @Min(1)
    @Field(() => Int)
    limit: number;

    @IsOptional()
    @IsIn(availableAgentSorts)
    @Field(() => String, { nullable: true })
    sort?: string;

    @IsOptional()
    @Field(() => Direction, { nullable: true })
    direction?: Direction;

    @IsNotEmpty()
    @Field(() => AISearch)
    search: AISearch;
};