import { Sequelize } from 'sequelize';

const db = new Sequelize('sequelize_db', 'admin', 'Biteofappetite123', {
  host: 'localhost',
  dialect: 'mysql',
});

export default db;
