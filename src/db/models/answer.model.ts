import { DataTypes } from "sequelize";
import type { Sequelize } from "sequelize";

export const AnswerModel = (sequelize: Sequelize) => {
  return sequelize.define(
    "Answers",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      text_answer: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      question_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Questions",
          key: "id",
        },
        onDelete: "CASCADE",
      },
    },
    { freezeTableName: true }
  );
};
