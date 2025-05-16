import { Router } from "express";
import questionRoutes from "./question.routes";
import answerRoutes from "./answer.routes";

const router = Router();

router.use("/question", questionRoutes);
router.use("/answer", answerRoutes);

export default router;
