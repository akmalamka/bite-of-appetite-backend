import express from 'express';
import {
  getWritings,
  getWritingById,
  createWriting,
  updateWriting,
  deleteWriting,
  uploadWritingImage,
  deleteWritingImage,
  getWritingByName,
} from '../controllers/WritingController.js';
import {
  getRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  uploadRecipeImage,
  deleteRecipeImage,
  getRecipeByName,
} from '../controllers/RecipeController.js';
import { uploadImage } from '../middleware/UploadMiddleware.js';

const router = express.Router();

router.get('/writings', getWritings);
// router.get('/writings/:id', getWritingById);
router.get('/writings/:writingName', getWritingByName);
router.post('/writings', createWriting);
router.put('/writings/:id', updateWriting);
router.delete('/writings/:id', deleteWriting);

router.post('/writings/:id/image', uploadImage, uploadWritingImage);
router.post('/recipes/:id/image', uploadImage, uploadRecipeImage);
router.delete('/writings/:id/image', deleteWritingImage);
router.delete('/recipes/:id/image', deleteRecipeImage);

router.get('/recipes', getRecipes);
// router.get('/recipes/:id', getRecipeById);
router.get('/recipes/:recipeName', getRecipeByName);
router.post('/recipes', createRecipe);
router.put('/recipes/:id', updateRecipe);
router.delete('/recipes/:id', deleteRecipe);

export default router;
