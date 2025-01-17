
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {

    @ApiProperty()
    @IsString()
    @Length(1, 255)
    @IsNotEmpty()
    readonly name: string;

    @ApiProperty()
    @IsString()
    @Length(1, 10)
    @IsNotEmpty()
    readonly password: string;
}






























