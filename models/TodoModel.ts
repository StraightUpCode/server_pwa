import { DATA_TYPES, Model } from "../deps.ts";

class TodoModel extends Model {
  static table = "todo2";
  static fields = {
    id: {
      primaryKey: true,
      autoIncrement: true,
    },
    local_id: DATA_TYPES.STRING,
    user_id: DATA_TYPES.INTEGER,
    todo: DATA_TYPES.STRING,
    status: {
      type: DATA_TYPES.ENUM,
      value: ['pendiente','realizado']
    },
    end_date: DATA_TYPES.DATETIME,
  };
}

export default TodoModel;
