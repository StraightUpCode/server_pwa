import { Router } from "../deps.ts";
import { TodoModel } from "../models/mod.ts";

const TodoRouter = new Router({
  prefix: "/api/todo",
});

TodoRouter.get("/", async (ctx) => {
  console.log("api");
  ctx.response.body = await TodoModel.all();
});
TodoRouter.get("/:id", async (ctx) => {
  console.log("api2");
  ctx.response.body = `Hello ${ctx.request}`;
});

export default TodoRouter;
