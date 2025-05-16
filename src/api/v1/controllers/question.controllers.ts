import type { Request, Response } from "express";
import { findAllQuestions, findQuestion, addQuestion, updateQuestion, destroyQuestion } from "../services/question.services";

export const getAllQuestions = async (req: Request, res: Response) => {
  try {
    const question = await findAllQuestions();

    if (!question) {
      res.status(404).json({ error: "Questions non trouvées." });
      return;
    }

    res.json(question);
  } catch (err) {
    res
      .status(500)
      .json({
        message: "Une erreur s'est produite durant la recherche de question.",
        error: err,
      });
  }
};

export const getQuestion = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    const question = await findQuestion(id);

    if (!question) {
      res.status(404).json({ error: "Question non trouvée." });
      return;
    }

    res.json(question);
  } catch (err) {
    res.status(500).json({
      message: "Une erreur s'est produite durant la recherche de question.",
      error: err,
    });
  }
};

export const postQuestion = async (req: Request, res: Response) => {
    const { textQuestion } = req.body;

    try {
        const newQuestion = await addQuestion(textQuestion);

        if (!newQuestion) {
            res.status(404).json({ error: "Question non ajoutée."});
            return;
        }

        res.status(201).json({ message: `La question viens d'être ajouté : ${textQuestion}`});
    } catch (err) {
        res.status(500).json({ message: "Une erreur s'est produite durant la création de question.", error: err });
    }
};

export const putQuestion = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const { textQuestion } = req.body;

    try {
        const modifyQuestion = await updateQuestion(id, textQuestion);

        if (!modifyQuestion) {
            res.status(404).json({ error: "Question non modifiée."});
            return;
        }

        res.status(200).json({ message: `La question viens d'être modifié par : ${textQuestion}`});
    } catch (err) {
        res.status(500).json({ message: "Une erreur s'est produite durant la modification de question.", error: err });
    }
};

export const deleteQuestion = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    try {
        const deleteQuestion = await destroyQuestion(id);

        if (!deleteQuestion) {
            res.status(404).json({ error: "Question non supprimé."});
            return;
        }

        res.status(200).json({ message: `La question avec l'id ${id} vient d'être supprimé.`});
    } catch (err) {
        res.status(500).json({ message: "Une erreur s'est produite durant la suppréssion de question.", error: err });
    }
};