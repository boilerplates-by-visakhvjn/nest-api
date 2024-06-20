import { IsNotEmpty } from 'class-validator';

export class GetAccountByIdDto {
  @IsNotEmpty()
  id: number;
}
