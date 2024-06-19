import * as argon2 from 'argon2';

import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
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

    delete account.password;
    return account;
  }
}
