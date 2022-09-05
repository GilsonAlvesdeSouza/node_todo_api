"use strict";

const sequelize = require("sequelize");

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable("list-todos", {
      id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      todo_id: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "todos",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },

      title: {
        type: sequelize.STRING,
        allowNull: false,
      },

      description: {
        type: sequelize.TEXT,
        allowNull: false,
      },

      done: {
        type: sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },

      created_at: {
        type: sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("list-todos");
  },
};
