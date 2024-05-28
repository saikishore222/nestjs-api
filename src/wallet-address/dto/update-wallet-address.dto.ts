import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateWalletAddressDto {
  @IsNumber()
  @IsOptional()
  userId?: number;

  @IsString()
  @IsOptional()
  address?: string;

  @IsString()
  @IsOptional()
  type?: string;
}
