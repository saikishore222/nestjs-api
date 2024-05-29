import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateWalletAddressDto {
  @IsString()
  @IsNotEmpty()
  address: string;

  @IsNumber()
  @IsNotEmpty()
  user_id: number;
}
