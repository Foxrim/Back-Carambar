import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const allowedOrigins = [
  `http://${process.env.HOST}:${process.env.PORT}`,
  process.env.BACK_LINK || '',
  process.env.GITHUB_PAGE || '',
  process.env.HOST_DEV || '',
].filter(Boolean);

const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Non autorisé par CORS'));
    }
  },
  credentials: true,
};

export default cors(corsOptions);
