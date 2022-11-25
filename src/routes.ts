import { Router } from 'express';
import { findMovieById } from './controllers/findMovieController';
import { listMovie } from './controllers/listMovieController';
import { createMovie } from './controllers/movieController';
import { removeMovie } from './controllers/removeMovieController';
import { updateMovie } from './controllers/updateMovieController';
import { validate } from './middleware/handleValidation';
import { movieCreateValidation } from './middleware/movieValidation';

const router = Router();

export default router
  .get('/api/', listMovie)
  .post('/api/movie', movieCreateValidation(), validate, createMovie)
  .get('/api/movie/:id', findMovieById)
  .delete('/api/movie/:id', removeMovie)
  .patch('/api/movie/:id', movieCreateValidation(), validate, updateMovie);
