import { DataTypes } from "sequelize";
import type { Sequelize } from "sequelize";

export const QuestionModel = (sequelize: Sequelize) => {
  return sequelize.define("Question", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    text_question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
