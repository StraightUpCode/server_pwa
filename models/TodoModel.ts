import {DATA_TYPES, Model} from '../deps.ts';



class TodoModel extends Model {
    static table = 'todo';
    static fields = {
        id: {
            primaryKey : true,
            autoIncrement: true
        },
        todo: DATA_TYPES.STRING,
        endDate : DATA_TYPES.DATETIME,

    }
}

export default TodoModel