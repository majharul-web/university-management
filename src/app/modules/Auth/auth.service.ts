import { jwtHelper } from './../../../helpers/jwtHelper';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { User } from '../User/user.model';
import {
  ILoginUser,
  ILoginUserResponse,
  IRefreshTokenResponse,
} from './auth.interface';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';

const userLogin = async (payload: ILoginUser): Promise<ILoginUserResponse> => {
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

  // create access token
  const accessToken = jwtHelper.createToken(
    { id: isUserExist.id, role: isUserExist.role },
    config.jwt.secret as Secret,
    {
      expiresIn: config.jwt.access_expires_in,
    }
  );
  // create refresh token
  const refreshToken = jwtHelper.createToken(
    { id: isUserExist.id, role: isUserExist.role },
    config.jwt.refresh_secret as Secret,
    {
      expiresIn: config.jwt.refresh_expires_in,
    }
  );

  return {
    accessToken,
    refreshToken,
    needsPasswordChange: isUserExist.needsPasswordChange,
  };
};

const refreshToken = async (token: string): Promise<IRefreshTokenResponse> => {
  let verifiedToken;
  try {
    verifiedToken = jwtHelper.verifyToken(
      token,
      config.jwt.refresh_secret as Secret
    );
  } catch (error) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Invalid refresh token');
  }

  const { id } = verifiedToken;

  const isUserExist = await User.isUserExist(id);
  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }

  // create refresh token
  const newAccessToken = jwtHelper.createToken(
    { id: isUserExist.id, role: isUserExist.role },
    config.jwt.secret as Secret,
    {
      expiresIn: config.jwt.access_expires_in,
    }
  );

  return {
    accessToken: newAccessToken,
  };
};

export const AuthService = {
  userLogin,
  refreshToken,
};
