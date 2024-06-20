import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AccountService } from 'src/account/account.service';
import { SignInDto } from './dto/sign-in.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private accountService: AccountService,
  ) {}

  @Post('login')
  async signIn(@Body() signInDto: SignInDto) {
    const account = await this.accountService.get(signInDto);

    if (account) {
      return this.authService.signToken({
        id: account.id,
        email: account.email,
      });
    } else {
      throw new UnauthorizedException();
    }
  }
}
