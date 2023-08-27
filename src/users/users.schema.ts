import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { v4 as uuidv4 } from 'uuid';
import { Document } from 'mongoose';
@Schema()
export class User extends Document {
  @Prop({
    required: false,
    type: String,
    default: function genUUID() {
      return uuidv4();
    },
  })
  _userId: string;

  @Prop({ required: true, unique: true })
  userName: string;

  @Prop({ required: true })
  password: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
