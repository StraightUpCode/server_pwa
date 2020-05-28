import { Router } from "../deps.ts";
import User, { LoginResult, UserCredential } from "../models/User.ts";

const AuthRouter = new Router();

AuthRouter.post("/login", async (ctx) => {
  const userCredentials: UserCredential = (await ctx.request.body()).value;
  console.log("Login");
  const user: LoginResult = await User.logIn(userCredentials);
  console.log(user);
});

AuthRouter.post("/register", async (ctx) => {
  console.log("register");
  const newUser = (await ctx.request.body()).value;
  console.log(newUser);
  const result = await User.create(newUser);
  if (result) {
    ctx.response.status = 200;
    ctx.response.body = {
      "message": "User created Succesfully",
    };
  }
});

AuthRouter.get('/logout', async(ctx) => {

  console.log('Log out')
})

export default AuthRouter;
