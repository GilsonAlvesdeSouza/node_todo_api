import Sequelize, { Model, DataTypes } from "sequelize";
import { sequelize } from "../../instances/pg";
import { Todo } from "./Todo";

export interface ListTodoInstance extends Model {
  id: number;
  title: string;
  description: string;
  done: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export const ListTodo = sequelize.define<ListTodoInstance>(
  "ListTodo",
  {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    done: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },

    createdAt: {
      type: DataTypes.DATE,
      field: "created_at",
    },

    updatedAt: {
      type: DataTypes.DATE,
      field: "updated_at",
    },
  },
  {
    tableName: "list-todos",
  }
);

ListTodo.belongsTo(Todo, {
  targetKey: "id",
  foreignKey: "todo_id",
});
