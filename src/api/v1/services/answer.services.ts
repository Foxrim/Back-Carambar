import { Answer } from "../models/answer.model";

export const findAllAnswers = async () => {
  const allAnswers = await Answer.findAll();

  if (!allAnswers) {
    throw new Error('Aucune réponse trouvé.');
  }
  
  return allAnswers;
};

export const findAnswer = async (id: number) => {
  const answer = await Answer.findByPk(id);

    if (!answer) {
        throw new Error(`Réponse ${id} non trouvé`);
    };

    return answer;
};

export const addAnswer = async (textAnswer: string, questionId: number) => {
    const addAnswer = await Answer.create({text_answer: textAnswer, question_id: questionId});

    if (!addAnswer) {
        throw new Error("La nouvelle réponse n'a pas pu être ajoutée.");
    }

    return addAnswer;
};

export const updateAnswer = async (id: number, textAnswer: string, questionId: number) => {
    const updateAnswer = await Answer.update({text_answer: textAnswer, question_id: questionId}, {where: { id }});

    if (!updateAnswer) {
        throw new Error("La modification n'a pas pu s'effectuer.");
    }

    return updateAnswer;
};

export const destroyAnswer = async (id: number) => {
    const destroyAnswer = await Answer.destroy({where: { id }});
    
    if (!destroyAnswer) {
        throw new Error("La suppression n'a pas pu s'effectuer.");
    }

    return destroyAnswer;
};