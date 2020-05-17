import  { Router } from '../deps.ts'

const AuthRouter = new Router({
    prefix: '/'
}); 

AuthRouter.get('/login' , async (ctx) => {
    ctx.response.body = "Hello world"
} )

export default AuthRouter;
