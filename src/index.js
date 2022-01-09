import express from 'express';
import Server from './server.js';
const app = express();
new Server(app).start();
