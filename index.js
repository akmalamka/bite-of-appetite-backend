// Import express
import express from 'express';
// Import cors
import cors from 'cors';
// Import connection
import db from './src/config/database.js';
// Import router
import Router from './src/routes/routes.js';

// Init express
const app = express();
// use express json
app.use(express.json());
// use cors
app.use(cors());
// app.use(express.static('uploads/writings'));
// app.use(express.static('uploads/recipes'));
app.use(express.static('photos'));
// Testing database connection
async function authenticate() {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
authenticate();

// use router
app.use(Router);

// listen on port
app.listen(8080, () => console.log('Server running at http://localhost:8080'));
