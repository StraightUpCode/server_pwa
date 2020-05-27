import {DATA_TYPES, Model} from '../deps.ts';

class TodoStatus extends Model {
    static table = 'todo_status';
    static timestamps = false;
    static fields = {
        id: {
            primaryKey : true,
            autoIncrement: true
        },
        status: DATA_TYPES.STRING,
    }


}

export default TodoStatus;