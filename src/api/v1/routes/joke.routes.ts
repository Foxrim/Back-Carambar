import { Router } from "express";
import { getAllJoke, getJoke, getRandomJoke } from "../controllers/joke.controllers"; 

const router = Router();

router.get("/", getAllJoke);
router.get("/random", getRandomJoke);
router.get("/:id", getJoke);

export default router;