import Recipe from '../models/Recipe.js';
import Responses from '../utils/Responses.js';

export const getRecipes = async (req, res) => {
  try {
    const recipe = await Recipe.findAll({
      attributes: ['id', 'title', 'description', 'image', 'tags'],
    });
    return Responses.sendOk(res, recipe);
  } catch (err) {
    return Responses.handleAllError(res, err);
  }
};

export const getRecipeById = async (req, res) => {
  try {
    await Recipe.findByPk(req.params.id)
      .then((data) => {
        if (data) {
          return Responses.sendOk(res, data);
        } else {
          return Responses.sendNotFound(res);
        }
      })
      .catch((err) => {
        return Responses.handleAllError(res, err);
      });
  } catch (err) {
    return Responses.handleAllError(res, err);
  }
};

export const createRecipe = async (req, res) => {
  try {
    await Recipe.create(req.body);
    return Responses.sendOk(res, 'Recipe Created');
  } catch (err) {
    return Responses.handleAllError(res, err);
  }
};

export const updateRecipe = async (req, res) => {
  try {
    await Recipe.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return Responses.sendOk(res, 'Recipe Updated');
  } catch (err) {
    return Responses.handleAllError(res, err);
  }
};

export const deleteRecipe = async (req, res) => {
  try {
    await Recipe.destroy({
      // truncate: true,
      // cascade: false,
      // restartIdentity: true,
      where: {
        id: req.params.id,
      },
    });
    return Responses.sendOk(res, 'Recipe Deleted');
  } catch (err) {
    return Responses.handleAllError(res, err);
  }
};

// export default {
//   getRecipes,
//   getRecipeById,
//   createRecipe,
//   updateRecipe,
//   deleteRecipe,
// };
