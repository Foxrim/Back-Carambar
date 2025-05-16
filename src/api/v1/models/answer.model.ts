import { DataTypes } from "sequelize";
import { sequelize } from "../../../db/models";

export const Answer = sequelize.define(
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
