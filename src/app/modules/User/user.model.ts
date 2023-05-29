import { Model, Schema, model } from 'mongoose';
import { IUser } from './user.interface';

type UserModel = Model<IUser, object>;

const userSchema = new Schema<IUser>({
  id: { type: Number, required: true, unique: true },
  role: { type: String, required: true },
  password: { type: String, required: true },
});

// 3. Create a Model.
const User = model<IUser, UserModel>('User', userSchema);
export default User;
