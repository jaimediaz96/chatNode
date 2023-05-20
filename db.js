import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const db = mongoose;

db.Promise = global.Promise;

async function connect(url) {
    await db.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: process.env.DB_NAME
    });
    
    console.log("[db] Conectada con éxito");
}

export { connect };