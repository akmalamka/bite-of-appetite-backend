import { Sequelize } from 'sequelize';

const db = new Sequelize('biteofappetite_db', 'admin', 'Biteofappetite123', {
  host: 'localhost',
  dialect: 'mysql',
});

export default db;
