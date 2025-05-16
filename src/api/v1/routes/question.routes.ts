import { Router } from "express";
import { getAllQuestions, getQuestion, postQuestion, putQuestion, deleteQuestion } from "../controllers/question.controllers";   

const router = Router();

router.get('/', getAllQuestions);
router.get('/:id', getQuestion);
router.post('/', postQuestion);
router.put('/:id', putQuestion);
router.delete('/:id', deleteQuestion);

export default router;
