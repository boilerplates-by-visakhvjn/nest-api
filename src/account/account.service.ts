import * as argon2 from 'argon2';

import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { GetAccountDto } from './dto/get-account.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AccountService {
  constructor(private prismaService: PrismaService) {}

  async create(createAccountDto: CreateAccountDto) {
    const hashedPassword = await argon2.hash(createAccountDto.password);
    const data = { ...createAccountDto, password: hashedPassword };

    const newAccount = await this.prismaService.account.create({ data });
    return this.getById(newAccount.id);
  }

  async getById(accountId: number) {
    const account = await this.prismaService.account.findUnique({
      where: {
        id: accountId,
      },
    });

    if (!account) {
      throw new NotFoundException();
    }

    delete account.password;
    return account;
  }

  async get(getAcccountDto: GetAccountDto) {
    const account = await this.prismaService.account.findFirst({
      where: {
        email: getAcccountDto.email,
      },
    });

    if (!account) {
      throw new ForbiddenException();
    }

    const passwordMatches = await argon2.verify(
      account.password,
      getAcccountDto.password,
    );

    if (!passwordMatches) {
      throw new ForbiddenException();
    }

    delete account.password;
    return account;
  }
}
