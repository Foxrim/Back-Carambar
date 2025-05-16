import { Sequelize } from 'sequelize';
import { QuestionModel } from './question.model';
import { AnswerModel } from './answer.model';
import { logger } from "../../utils/logger";
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: `${process.env.DATABASE_URL}`,
  logging: false,
});

export const Question = QuestionModel(sequelize);
export const Answer = AnswerModel(sequelize);

Question.hasMany(Answer, { foreignKey: 'question_id', as: 'answers' });
Answer.belongsTo(Question, { foreignKey: 'question_id', as: 'questions' });

export const initDb = async () => {
  await sequelize.sync();
  logger.info('📂 SQLite DB synchronisée !');
};
