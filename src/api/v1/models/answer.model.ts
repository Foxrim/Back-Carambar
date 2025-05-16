import { DataTypes } from "sequelize";
import type { Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
  const Answer = sequelize.define(
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

  return Answer;
} 
