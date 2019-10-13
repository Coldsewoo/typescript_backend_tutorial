import { IsString, MaxLength } from "class-validator"

export default class CreateMessageDto {
  @IsString()
  public title: string

  @IsString()
  public message: string

  @IsString()
  @MaxLength(15)
  public author: string
}