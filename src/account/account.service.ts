import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';

@Injectable()
export class AccountService {
  async create(createAccountDto: CreateAccountDto) {
    return createAccountDto;
  }
}
