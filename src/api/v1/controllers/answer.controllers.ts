import type { Request, Response } from "express";
import { findAllAnswers, findAnswer, addAnswer, updateAnswer, destroyAnswer } from "../services/answer.services";

export const getAllAnswers = async (req: Request, res: Response) => {
  try {
    const answer = await findAllAnswers();

    if (answer.length === 0) {
      res.status(404).json({ error: "Réponses non trouvées." });
      return;
    }

    res.json(answer);
  } catch (err) {
    res
      .status(500)
      .json({
        message: "Une erreur s'est produite durant la recherche des réponses.",
        error: err,
      });
  }
};

export const getAnswer = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    const answer = await findAnswer(id);

    if (!answer) {
      res.status(404).json({ error: "Réponse non trouvée." });
      return;
    }

    res.json(answer);
  } catch (err) {
    res.status(500).json({
      message: "Une erreur s'est produite durant la recherche de réponse.",
      error: err,
    });
  }
};

export const postAnswer = async (req: Request, res: Response) => {
    const { text_answer, question_id } = req.body;

    try {
        const newAnswer = await addAnswer(text_answer, Number(question_id));

        if (!newAnswer) {
            res.status(404).json({ error: "Réponse non ajoutée."});
            return;
        }

        res.status(201).json({ message: `La réponse viens d'être ajouté : ${text_answer}`});
    } catch (err) {
        res.status(500).json({ message: "Une erreur s'est produite durant la création de réponse.", error: err });
    }
};

export const putAnswer = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const { text_answer, question_id } = req.body;

    try {
        const modifyAnswer = await updateAnswer(id, text_answer, Number(question_id));

        if (!modifyAnswer) {
            res.status(404).json({ error: "Réponse non modifiée."});
            return;
        }

        res.status(200).json({ message: `La réponse viens d'être modifié par : ${text_answer}`});
    } catch (err) {
        res.status(500).json({ message: "Une erreur s'est produite durant la modification de réponse.", error: err });
    }
};

export const deleteAnswer = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    try {
        const deleteAnswer = await destroyAnswer(id);

        if (!deleteAnswer) {
            res.status(404).json({ error: "Réponse non supprimé."});
            return;
        }

        res.status(200).json({ message: `La réponse avec l'id ${id} vient d'être supprimé.`});
    } catch (err) {
        res.status(500).json({ message: "Une erreur s'est produite durant la suppréssion de réponse.", error: err });
    }
};