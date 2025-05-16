import { Sequelize } from 'sequelize';
import { QuestionModel } from './question.model';
import { AnswerModel } from './answer.model';

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './src/db/database.sqlite',
  logging: false,
});

export const Question = QuestionModel(sequelize);
export const Answer = AnswerModel(sequelize);

Question.hasMany(Answer, { foreignKey: 'question_id', as: 'Answers' });
Answer.belongsTo(Question, { foreignKey: 'question_id', as: 'Questions' });

export const initDb = async () => {
  await sequelize.sync();
  console.log('📂 SQLite DB synchronisée !');
};
