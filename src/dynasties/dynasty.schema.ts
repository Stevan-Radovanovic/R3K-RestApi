import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DynastyDocument = Dynasty & Document;

@Schema()
export class Dynasty {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  shortName: string;
}

export const DynastySchema = SchemaFactory.createForClass(Dynasty);