import { Application } from "./deps.ts";
import { TodoRouter, MainRouter } from "./routes/mod.ts";
const server = new Application();

//Routes
server.use((ctx, next) => {
  console.log(ctx.request.url);
  next();
});

server.use(MainRouter.routes());
server.use(TodoRouter.routes());

//server.use(MainRouter.allowedMethods())

//server.use(TodoRouter.allowedMethods())
console.log("Server Created");
await server.listen({ port: 3000 });
