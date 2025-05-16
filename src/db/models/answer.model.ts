import { DataTypes } from "sequelize";
import type { Sequelize } from "sequelize";

export const AnswerModel = (sequelize: Sequelize) => {
  return sequelize.define("Answer", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    text_anwser: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
