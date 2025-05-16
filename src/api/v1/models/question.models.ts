import { DataTypes } from "sequelize";
import { sequelize } from "../../../db/models";

export const Question = sequelize.define('Question', {
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
