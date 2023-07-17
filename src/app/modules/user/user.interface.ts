/* eslint-disable no-unused-vars */

import { Model } from "mongoose";

export type IUser = {
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
};

// export type UserModel = Model<IUser, Record<string, unknown>>;

export type UserModel = {
  isUserExist(
    email: string
  ): Promise<Pick<IUser & { id: string }, 'password' | 'role' | 'email' | "id">>;
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>;
} & Model<IUser>;

export type IUserFilters = {
  searchTerm?: string;
  id?: string;
  price?: string;
  contactNo?: string;
  location?: string;
};
