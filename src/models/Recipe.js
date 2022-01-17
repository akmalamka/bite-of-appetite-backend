// import sequelize
import { Sequelize } from 'sequelize';
// import connection
import db from '../config/database.js';

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Recipe = db.define(
  'recipes',
  {
    image: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    title: {
      type: DataTypes.STRING,
    },
    tags: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    time: {
      type: DataTypes.STRING,
    },
    foodPhotographyBy: {
      type: DataTypes.STRING,
    },
    foodStylingBy: {
      type: DataTypes.STRING,
    },
    recipeBy: {
      type: DataTypes.STRING,
    },
    inspiredByExist: {
      type: DataTypes.BOOLEAN,
    },
    inspiredBy: {
      type: DataTypes.STRING,
    },
    story: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.STRING,
    },
    serves: {
      type: DataTypes.INTEGER,
    },
    isIngredientsWithComponent: {
      type: DataTypes.BOOLEAN,
    },
    ingredients: {
      type: DataTypes.JSON,
    },
    directions: {
      type: DataTypes.JSON,
    },
  },
  //   {
  //     // Freeze Table Name
  //     freezeTableName: true,
  //   },
);

export default Recipe;
