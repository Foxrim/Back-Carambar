import { Router } from "express";
import questionRoutes from "./question.routes";
import answerRoutes from "./answer.routes";
import jokeRoutes from "./joke.routes";

const router = Router();

router.use("/question", questionRoutes);
router.use("/answer", answerRoutes);
router.use("/blagues", jokeRoutes);

export default router;
