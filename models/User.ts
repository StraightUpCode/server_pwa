import { DATA_TYPES, Model } from "../deps.ts";

export interface LoginResult {
  matchingResult: boolean;
  result?: UserModel;
}

export interface UserModel {
  id: number;
  username: string;
  password: string;
  email: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface UserCredential {
  username: string;
  password: string;
}

class User extends Model {
  static table = "user";
  static fields = {
    id: {
      primaryKey: true,
      autoIncrement: true,
    },
    username: DATA_TYPES.STRING,
    password: DATA_TYPES.STRING,
    email: DATA_TYPES.STRING,
  };

  static async logIn(UserCredential: UserCredential): Promise<LoginResult> {
    const { username, password } = UserCredential;
    const user = await User.where({
      username,
      password,
    }).first();

    if (user) {
      const result: LoginResult = {
        matchingResult: true,
        result: user,
      };
      return result;
    } else {
      return {
        matchingResult: false,
      };
    }
  }
}

export default User;
