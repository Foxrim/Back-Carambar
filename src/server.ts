import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { initDb } from './db/models';
import v1Routes from "./api/v1/routes/index";
import dotenv from "dotenv";

import "./app";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());               
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
      console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Erreur au démarrage :', error);
    process.exit(1);
  }
};

startServer();
