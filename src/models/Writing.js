import { Sequelize } from 'sequelize';
import db from '../config/database.js';

const { DataTypes } = Sequelize;

const Writing = db.define('writings', {
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
  photographBy: {
    type: DataTypes.STRING,
  },
  story: {
    type: DataTypes.STRING,
  },
  date: {
    type: DataTypes.STRING,
  },
});

export default Writing;
