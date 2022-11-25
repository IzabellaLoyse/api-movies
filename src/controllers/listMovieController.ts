import { Request, Response } from 'express';
import Logger from '../../config/logger';
import { MovieModel } from '../models/Movie';

export async function listMovie(req: Request, res: Response) {
  try {
    const movies = await MovieModel.find();
    return res.status(200).json(movies);
  } catch (error: any) {
    Logger.error(`Error while listing movies: ${error.message}`);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
