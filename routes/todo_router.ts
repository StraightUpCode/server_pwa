import  { Router } from '../deps.ts'

const TodoRouter = new Router({
    prefix: '/api/todo'
}); 

TodoRouter.get('/' , async (ctx) => {
    console.log('api')
    ctx.response.body = "Hello world"
} )
TodoRouter.get('/:id' , async (ctx) => {
    console.log('api')
    ctx.response.body = `Hello ${ctx.request}`
} )

TodoRouter.forEach((val1, val2, router) => {
    console.log('Val 1,',val1)
    console.log('Val 2,',val2)
    console.log('Router', router)

})

export default TodoRouter;
