import Sequelize, { Model, DataTypes } from "sequelize";
import { sequelize } from "../../instances/pg";

export interface TodoInstance extends Model {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export const Todo = sequelize.define<TodoInstance>(
  "Todo",
  {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
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
  { tableName: "todos" }
);
