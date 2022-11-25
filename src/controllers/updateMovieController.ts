import { Request, Response } from 'express';
import Logger from '../../config/logger';
import { MovieModel } from '../models/Movie';

export async function updateMovie(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const data = req.body;

    const movie = await MovieModel.findById(id);

    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }

    await MovieModel.updateOne({ _id: id }, data);
    return res.status(200).json(data);
  } catch (error: any) {
    Logger.error(`Error while updating movie: ${error.message}`);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
