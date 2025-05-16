import express from 'express';
import corsMiddleware from './config/cors.config';
import helmet from 'helmet';
import { initDb } from './db/models';
import v1Routes from "./api/v1/routes/index";
import dotenv from "dotenv";
import { logger } from "./utils/logger";


import "./app";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(corsMiddleware);               
app.use(helmet());            
app.use(express.json());      

app.use('/api/v1', v1Routes);

app.get('/', (_req, res) => {
  res.send('✅ API opérationnelle');
});

const startServer = async () => {
  try {
    await initDb(); 
    app.listen(PORT, () => {
      logger.info(`🚀 Serveur lancé sur http://localhost:${PORT}`);
    });
  } catch (error) {
    logger.error('❌ Erreur au démarrage :', error);
    process.exit(1);
  }
};

startServer();
