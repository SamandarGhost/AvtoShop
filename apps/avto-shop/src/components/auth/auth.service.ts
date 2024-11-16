import { Injectable } from '@nestjs/common';
import * as bycript from 'bcryptjs';
import { Member } from '../../libs/dto/member/member';
import { JwtService } from '@nestjs/jwt';
import { T } from '../../libs/types/common';
import { shapeIntoMongoObjectId } from '../../libs/config';
import { Dealer } from '../../libs/dto/dealer/dealer';
import { CarService } from '../../libs/dto/car-service.ts/car-service';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) { }
    public async hashPassword(memberPassword: string): Promise<string> {
        const salt = await bycript.genSalt();
        return await bycript.hash(memberPassword, salt);
    };

    public async comparePassword(password: string, hashedPassword: string): Promise<boolean> {
        return await bycript.compare(password, hashedPassword);
    };

    public async createToken(member: Member): Promise<string> {
        const payload: T = {};
        Object.keys(member['_doc'] ? member['_doc'] : member).map((ele) => {
            payload[`${ele}`] = member[`${ele}`];
        });
        delete payload.memberPassword;

        return await this.jwtService.signAsync(payload);
    };

    public async verifyToken(token: string): Promise<Member> {
        const member = await this.jwtService.verifyAsync(token);
        member._id = shapeIntoMongoObjectId(member._id);
        return member;
    }

    public async createTokenDealer(dealer: Dealer): Promise<string> {
        const payload: T = {};
        Object.keys(dealer['_doc'] ? dealer['_doc'] : dealer).map((ele) => {
            payload[`${ele}`] = dealer[`${ele}`];
        });
        delete payload.dealerPassword;

        return await this.jwtService.signAsync(payload);
    };

    public async verifyTokenDealer(token: string): Promise<Dealer> {
        const dealer = await this.jwtService.verifyAsync(token);
        dealer._id = shapeIntoMongoObjectId(dealer._id);
        return dealer;
    }

    public async createTokenService(service: CarService): Promise<string> {
        const payload: T = {};
        Object.keys(service['_doc'] ? service['_doc'] : service).map((ele) => {
            payload[`${ele}`] = service[`${ele}`];
        });
        delete payload.carServicePassword;

        return await this.jwtService.signAsync(payload);
    };

    public async verifyTokenService(token: string): Promise<CarService> {
        const service = await this.jwtService.verifyAsync(token);
        service._id = shapeIntoMongoObjectId(service._id);
        return service;
    }
};

