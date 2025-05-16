import type { Request, Response } from "express";
import { allJoke, joke, randomJole } from "../services/joke.services";

export const getAllJoke = async (req: Request, res: Response) => {
    try {
        const findAllJokes = await allJoke();

        if (findAllJokes.length === 0) {
            res.status(404).json({ error: 'Blagues non trouvées.'});
        }

        res.status(200).json(findAllJokes);
    } catch (err) {
        res.status(500).json({ message: "Une erreur s'est produite durant la recherche de blague.", error: err });
    }
}

export const getJoke = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    try {
        const findJoke = await joke(id);

        if (!findJoke) {
            res.status(404).json({ error: 'Blague non trouvée.'});
        }

        res.status(200).json(findJoke);
    } catch (err) {
        res.status(500).json({ message: "Une erreur s'est produite durant la recherche de blague.", error: err });
    }
}

export const getRandomJoke = async (req: Request, res: Response) => {
    try {
        const findRandomJoke = await randomJole();

        if (!findRandomJoke) {
            res.status(404).json({ error: 'Blague non trouvée.'});
        }

        res.status(200).json(findRandomJoke);
    } catch (err) {
        res.status(500).json({ message: "Une erreur s'est produite durant la recherche de blague.", error: err });
    }
}