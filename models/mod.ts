import { Database } from "../deps.ts";
import { DB_HOST, DB_NAME, DB_PASS, DB_USER } from "../enviroment.ts";

import TodoModel from "./TodoModel.ts";
import TodoStatus from "./TodoStatus.ts";
import User from "./User.ts";

console.log(DB_HOST, DB_NAME, DB_PASS, DB_USER);

const db = new Database("postgres", {
  host: DB_HOST,
  database: DB_NAME,
  username: DB_USER,
  password: DB_PASS,
});

db.link([TodoModel, TodoStatus, User]);


await db.sync({drop: true});
console.log("Awaiting Db Sync");

export default db;
export {
  db,
  TodoModel,
  TodoStatus,
};
