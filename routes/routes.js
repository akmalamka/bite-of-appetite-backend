// Import express
import express from 'express';
// Import Controller Writing
import {
  getWritings,
  getWritingById,
  createWriting,
  updateWriting,
  deleteWriting,
} from '../controllers/Writing.js';

// Init express router
const router = express.Router();

router.get('/writings', getWritings);
router.get('/writings/:id', getWritingById);
router.post('/writings', createWriting);
router.put('/writings/:id', updateWriting);
router.delete('/writings/:id', deleteWriting);

export default router;
