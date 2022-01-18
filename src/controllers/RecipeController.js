import Recipe from '../models/Recipe.js';
import Responses from '../utils/Responses.js';
import { api } from '../utils/const.js';

export const getRecipes = async (req, res) => {
  try {
    const recipe = await Recipe.findAll({
      attributes: ['id', 'title', 'description', 'image', 'tags'],
    });
    return Responses.sendOk(res, recipe.reverse());
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
    await Recipe.findOne({
      order: [['id', 'DESC']],
    }).then((data) => {
      return Responses.sendOk(res, data);
    });
  } catch (err) {
    return Responses.handleAllError(res, err);
  }
};

export const updateRecipe = async (req, res) => {
  try {
    //test si inspiredByExistnya ngaruh ga
    await Recipe.update(
      {
        description: req.body.description,
        title: req.body.title,
        tags: req.body.tags,
        time: req.body.time,
        foodPhotographyBy: req.body.foodPhotographyBy,
        foodStylingBy: req.body.foodStylingBy,
        recipeBy: req.body.recipeBy,
        inspiredByExist: req.body.inspiredByExist,
        inspiredBy: req.body.inspiredBy,
        story: req.body.story,
        date: req.body.date,
        serves: req.body.serves,
        isIngredientsWithComponent: req.body.isIngredientsWithComponent,
        ingredients: req.body.ingredients,
        directions: req.body.directions,
      },
      {
        where: {
          id: req.params.id,
        },
      },
    );
    return Responses.sendOk(res, 'Recipe Updated');
  } catch (err) {
    return Responses.handleAllError(res, err);
  }
};

export const deleteRecipe = async (req, res) => {
  try {
    await Recipe.destroy({
      where: {
        id: req.params.id,
      },
    });
    return Responses.sendOk(res, 'Recipe Deleted');
  } catch (err) {
    return Responses.handleAllError(res, err);
  }
};

export const uploadRecipeImage = async (req, res) => {
  try {
    const imageUrl = req.file.filename;

    await Recipe.update(
      { image: `${api}/${imageUrl}` },
      {
        where: {
          id: req.params.id,
        },
      },
    );
    return Responses.sendOk(res, 'Image Updated');
  } catch (err) {
    console.log(err);
    return Responses.handleWriteError(res, err);
  }
};

export const deleteRecipeImage = async (req, res) => {
  try {
    const { activity } = req;
    const poster = '';

    await activity.update({ poster });
    return Responses.sendOk(res, poster);
  } catch (err) {
    return Responses.handleWriteError(res, err);
  }
};
