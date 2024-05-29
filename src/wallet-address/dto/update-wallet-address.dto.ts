import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateWalletAddressDto {
  @IsString()
  @IsOptional()
  address?: string;

  @IsString()
  @IsOptional()
  user_id?: number;
}
