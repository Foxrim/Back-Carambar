import { Question } from "../models/question.models";

export const findAllQuestions = async () => {
  const allQuestion = await Question.findAll();

  if (!allQuestion) {
    throw new Error('Aucune question trouvé.');
  }
  
  return allQuestion;
};

export const findQuestion = async (id: number) => {
  const question = await Question.findByPk(id);

    if (!question) {
        throw new Error(`Question ${id} non trouvé`);
    };

    return question;
};

export const addQuestion = async (textQuestion: string) => {
    const addQuestion = await Question.create({text_question: textQuestion});

    if (!addQuestion) {
        throw new Error("La nouvelle question n'a pas pu être ajoutée.");
    }

    return addQuestion;
};

export const updateQuestion = async (id: number, textQuestion: string) => {
    const updateQuestion = await Question.update({text_question: textQuestion}, {where: { id }});

    if (!updateQuestion) {
        throw new Error("La modification n'a pas pu s'effectuer.");
    }

    return updateQuestion;
};

export const destroyQuestion = async (id: number) => {
    const destroyQuestion = await Question.destroy({where: { id }});
    
    if (!destroyQuestion) {
        throw new Error("La suppression n'a pas pu s'effectuer.");
    }

    return destroyQuestion;
};