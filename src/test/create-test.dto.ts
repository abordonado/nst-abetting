import { IsString } from 'class-validator';

export class CreateTestDto {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsString()
  status: string;
}
