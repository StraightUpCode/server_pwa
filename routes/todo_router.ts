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
  const {response , request } = ctx
  console.log(request)
  response.body = await TodoModel
  .where('user_id',1 )
  .all();
});

TodoRouter.post('/:id', async (ctx) => {
  console.log('Router Post')
  const {response, request} = ctx 
  console.log(request)
  const newTodo = (await request.body()).value
  TodoModel.create(newTodo)


})

export default TodoRouter;
