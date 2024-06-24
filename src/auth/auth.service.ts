import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { JwtPayloadDto } from './dto/jwt-payload.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  signToken(jwtPayloadDto: JwtPayloadDto): object {
    const JWT_ACCESS_TOKEN_SECRET = this.configService.get(
      'JWT_ACCESS_TOKEN_SECRET',
    );
    const JWT_ACCESS_TOKEN_EXPIRES_IN = this.configService.get(
      'JWT_ACCESS_TOKEN_EXPIRES_IN',
    );

    const JWT_REFRESH_TOKEN_SECRET = this.configService.get(
      'JWT_REFRESH_TOKEN_SECRET',
    );
    const JWT_REFRESH_TOKEN_EXPIRES_IN = this.configService.get(
      'JWT_REFRESH_TOKEN_EXPIRES_IN',
    );

    const payload = {
      sub: jwtPayloadDto.id,
      email: jwtPayloadDto.email,
    };

    const accessToken = this.jwtService.sign(payload, {
      expiresIn: JWT_ACCESS_TOKEN_EXPIRES_IN,
      secret: JWT_ACCESS_TOKEN_SECRET,
    });

    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: JWT_REFRESH_TOKEN_EXPIRES_IN,
      secret: JWT_REFRESH_TOKEN_SECRET,
    });

    return { accessToken, refreshToken };
  }
}
