// import sequelize
import { Sequelize } from 'sequelize';
// import connection
import db from '../config/database.js';

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Writing = db.define(
  'writings',
  {
    // Define attributes
    image: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    title: {
      type: DataTypes.STRING,
    },
    writingsBy: {
      type: DataTypes.STRING,
    },
    story: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.STRING,
    },
  },
  {
    // Freeze Table Name
    freezeTableName: true,
  },
);

// Export model Writing
export default Writing;
