// Global imports
import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


export type CountryDocument = HydratedDocument<Country>;

@Schema()
export class Country {
  @Prop()
  name: string;

  @Prop()
  code: string;
}

export const CountrySchema = SchemaFactory.createForClass(Country);
