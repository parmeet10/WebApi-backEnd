import express from 'express';
import Server from './server.js';
import setupDatabase from './models/sequelize/index.js';
async function main() {
    const app = express();
    const db = await setupDatabase()
    db.sequelize.authenticate();
    console.log('Database connected successfully');
    new Server(app).start();
}

main();
