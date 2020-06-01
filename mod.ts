import { Application , Router} from "./deps.ts";
import { TodoRouter, MainRouter, AuthRouter } from "./routes/mod.ts";


const server = new Application();

//MiddleWare
server.use((ctx, next) => {
  console.log(ctx.request.url);
  next();
});


// Router
server.use(MainRouter.routes());
server.use(TodoRouter.routes());
const router = new Router()
router.get('/', async(ctx) => {
  console.log(ctx)
})
server.use(router.routes())
server.use(AuthRouter.routes());

//server.use(MainRouter.allowedMethods())

//server.use(TodoRouter.allowedMethods())
console.log("Server Created");
await server.listen({ port: 3000 });

