import { Request, Response } from 'express';
import Logger from '../../config/logger';
import { MovieModel } from '../models/Movie';

export async function createMovie(req: Request, res: Response) {
  try {
    const data = req.body;
    const movie = await MovieModel.create(data);
    return res.status(201).json(movie);
  } catch (error: any) {
    Logger.error(`Error while creating movie: ${error.message}`);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
