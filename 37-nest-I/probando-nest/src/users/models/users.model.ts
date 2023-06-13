import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;
// export type UserDocument = LeanDocument<User>

@Schema()
export class User {
  @Prop()
  first_name: string;

  @Prop()
  last_name: string;

  @Prop()
  email: string;

  @Prop({ default: '123' })
  password: string;
}

export const UserShema = SchemaFactory.createForClass(User);
