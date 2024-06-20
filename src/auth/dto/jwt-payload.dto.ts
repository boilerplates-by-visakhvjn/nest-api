import { IsNumber, IsString } from 'class-validator';

export class JwtPayloadDto {
  @IsNumber()
  id: number;

  @IsString()
  email: string;
}
