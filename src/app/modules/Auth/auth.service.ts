import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { User } from '../User/user.model';
import { ILoginUser } from './auth.interface';

const userLogin = async (payload: ILoginUser) => {
  const { id, password } = payload;
  // create instance of user model
  // const user = new User();

  // check user is exist
  const isUserExist = await User.isUserExist(id);

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  // check password is match
  if (
    isUserExist.password &&
    !(await User.isPasswordMatched(password, isUserExist?.password))
  ) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Password not match');
  }
};

export const AuthService = {
  userLogin,
};
