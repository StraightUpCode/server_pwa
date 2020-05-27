import { DATA_TYPES, Model } from "../deps.ts";

interface LoginResult {
  matchingResult: boolean;
  result?: any;
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

  static async logIn(username: string, password: string): Promise<LoginResult> {
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
