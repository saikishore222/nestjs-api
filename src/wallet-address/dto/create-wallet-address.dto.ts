import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateWalletAddressDto {
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  type: string;
}
