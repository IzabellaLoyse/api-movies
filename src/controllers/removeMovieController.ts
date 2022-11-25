import { Request, Response } from 'express';
import Logger from '../../config/logger';
import { MovieModel } from '../models/Movie';

export async function removeMovie(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const movie = await MovieModel.findById(id);

    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }

    await movie.delete();
    return res.status(200).json({ msg: 'Movie deleted successfully' });
  } catch (error: any) {
    Logger.error(`Error while deleting movie: ${error.message}`);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
