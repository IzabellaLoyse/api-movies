import config from 'config';
import mongoose from 'mongoose';
import Logger from '../config/logger';

async function connect() {
  const dbUri = config.get<string>('dbUri');

  try {
    await mongoose.connect(dbUri);
    Logger.info('Connected to MongoDB');
  } catch (error) {
    Logger.error('Could not connect to MongoDB', error);
    process.exit(1);
  }
}

export default connect;
