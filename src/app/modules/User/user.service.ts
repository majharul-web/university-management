import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { IUser } from './user.interface';
import User from './user.model';
import { generateUserId } from './user.utils';

const createUser = async (user: IUser): Promise<IUser | null> => {
  const id = await generateUserId();
  user.id = id;

  if (!user.password) {
    user.password = config.default_user_password as string;
  }
  const createdUser = User.create(user);

  if (!createdUser) {
    throw new ApiError(400, 'Error creating user');
  }
  return createdUser;
};

export default {
  createUser,
};
