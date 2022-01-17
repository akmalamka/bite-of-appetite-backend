// import sequelize
import { Sequelize } from 'sequelize';

// create connection
const db = new Sequelize('biteofappetite_db', 'admin', 'Biteofappetite123', {
  host: 'localhost',
  dialect: 'mysql',
});

// export connection
export default db;
