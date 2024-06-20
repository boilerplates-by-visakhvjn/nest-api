import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JWTStrategy } from './strategy/jwt.strategy';
import { ConfigModule } from '@nestjs/config';
import { AccountModule } from 'src/account/account.module';

@Module({
  imports: [JwtModule.register({}), ConfigModule, AccountModule],
  providers: [AuthService, JWTStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
