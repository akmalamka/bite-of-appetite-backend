import express from 'express';
import cors from 'cors';
import db from './src/config/database.js';
import Router from './src/routes/routes.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('photos'));

async function authenticate() {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
authenticate();

app.use(Router);

app.listen(8080, () => console.log('Server running at http://localhost:8080'));
