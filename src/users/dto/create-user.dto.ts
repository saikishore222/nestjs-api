import { IsString, IsEmail, isValidationOptions } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  readonly email: string;

  @IsString()
  readonly  password: string;

  @IsString()
  readonly  username: string;
}
