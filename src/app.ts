import { initDb } from "./db/models";

const start = async () => {
    await initDb;
};

start();