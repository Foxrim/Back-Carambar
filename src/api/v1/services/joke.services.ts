import { Question, Answer } from "../models"
import { Sequelize } from "sequelize";

export const allJoke = async () => {
  const questionsWithAnswers = await Question.findAll({
    include: {
      model: Answer,
      as: "answers",
      required: false,
    },
  });

  if (!questionsWithAnswers) {
    throw new Error("Aucune blague trouvée");
  }

  return questionsWithAnswers;
};

export const joke = async (id: number) => {
  const questionWithAnswer = await Question.findByPk(id, {
    include: {
      model: Answer,
      as: "answers",
      required: false,
    },
  });

  if (!questionWithAnswer) {
    throw new Error("Aucune blague trouvée");
  }

  return questionWithAnswer;
};
export const randomJole = async () => {
  const questionWithAnswer = await Question.findOne({
    order: Sequelize.literal('RANDOM()'),
    include: {
      model: Answer,
      as: "answers",
      required: false,
    },
  });

  if (!questionWithAnswer) {
    throw new Error("Aucune blague trouvée");
  }

  return questionWithAnswer;
};

