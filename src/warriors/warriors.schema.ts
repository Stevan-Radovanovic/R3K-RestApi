import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WarriorDocument = Warrior & Document;

@Schema()
export class Warrior {
    @Prop()
    fullName: string;

    @Prop()
    weapon: string;

    @Prop()
    description: string;

    @Prop()
    level: number;
}

export const WarriorSchema = SchemaFactory.createForClass(Warrior);