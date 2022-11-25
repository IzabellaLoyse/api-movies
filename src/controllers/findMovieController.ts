import { Request, Response } from 'express';
import Logger from '../../config/logger';
import { MovieModel } from '../models/Movie';

export async function findMovieById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const movie = await MovieModel.findById(id);

    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }

    return res.status(200).json(movie);
  } catch (error: any) {
    Logger.error(`Error while finding movie: ${error.message}`);
  }
}
