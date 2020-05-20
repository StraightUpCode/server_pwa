import { Database } from '../deps.ts';
import TodoModel from './TodoModel.ts';


const db = new Database('postgres',{
    host: '',
    database: '',
    username: '',
    password: ''
})

db.link([TodoModel])
await db.sync() 
console.log('Awaiting Db Sync')

export default db
export {
    db,
    TodoModel,
}