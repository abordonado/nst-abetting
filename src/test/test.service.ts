import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Test } from '../database/schemas/test.schema';
import { Model } from 'mongoose';
import { CreateTestDto } from './create-test.dto';

@Injectable()
export class TestService {
  constructor(@InjectModel(Test.name) private testModel: Model<Test>) {}

  async create(createTestDto: CreateTestDto): Promise<Test> {
    const createTest = new this.testModel(createTestDto);
    return createTest.save();
  }

  async findAll(): Promise<Test[]> {
    return this.testModel.find().exec();
  }
}
