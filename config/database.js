// import sequelize
import { Sequelize } from 'sequelize';

// create connection
const db = new Sequelize('sequelize_db', 'root', 'Cintawaltro16', {
  host: 'localhost',
  dialect: 'mysql',
});

// export connection
export default db;
