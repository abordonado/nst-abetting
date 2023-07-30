import { Body, Controller, Get, Post } from '@nestjs/common';
import { TestService } from './test.service';
import { CreateTestDto } from './create-test.dto';

@Controller('test')
export class TestController {
  constructor(private testService: TestService) {}

  @Get()
  async getAll() {
    return this.testService.findAll();
  }

  @Post()
  async create(@Body() createTest: CreateTestDto) {
    return this.testService.create(createTest);
  }
}
