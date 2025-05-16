import { Sequelize } from 'sequelize';
import  AnswerModel  from "./answer.model";
import  QuestionModel  from "./question.model";

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './src/db/database.sqlite',
  logging: false,
});

export const Question = QuestionModel(sequelize);
export const Answer = AnswerModel(sequelize);

Question.hasMany(Answer, { foreignKey: 'question_id', as: 'answers' });
Answer.belongsTo(Question, { foreignKey: 'question_id', as: 'questions' });

export const initDb = async () => {
  await sequelize.sync();
  console.log('📂 SQLite DB synchronisée !');
};
