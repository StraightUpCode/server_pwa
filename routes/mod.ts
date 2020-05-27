import TodoRouter from "./todo_router.ts";
import AuthRouter from "./auth_router.ts";
import { Router } from "../deps.ts";

const MainRouter = new Router();

MainRouter.get("/", (ctx) => {
  console.log("request");
  ctx.response.body = "Main Router";
});

export {
  TodoRouter,
  AuthRouter,
  MainRouter,
};
