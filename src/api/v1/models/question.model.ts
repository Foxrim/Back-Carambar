import { DataTypes } from "sequelize";
import type { Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
  const Question = sequelize.define(
    "Questions",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      text_question: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { freezeTableName: true }
  );
  
  return Question;
};
