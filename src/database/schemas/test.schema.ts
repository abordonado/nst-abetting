import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';

export type TestDocument = HydratedDocument<Test>;

@Schema()
export class Test {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  status: string;
}

export const TestSchema = SchemaFactory.createForClass(Test);
