import { oak } from './deps.ts';
import Router from './routes/mod.ts';
// Oak Imports
const { Application } = oak ;

const server = new Application();

server.use(Router.routes())

await server.listen({port : 3000})

