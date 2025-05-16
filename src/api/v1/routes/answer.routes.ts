import { Router } from "express";
import { getAllAnswers, getAnswer, postAnswer, putAnswer, deleteAnswer } from "../controllers/answer.controllers";   

const router = Router();

router.get('/', getAllAnswers);
router.get('/:id', getAnswer);
router.post('/', postAnswer);
router.put('/:id', putAnswer);
router.delete('/:id', deleteAnswer);

export default router;
