import config from 'config';
import express from 'express';
import connect from '../config/db';
import Logger from '../config/logger';
import morganMiddleware from './middleware/morganMiddleware';
import routes from './routes';

const app = express();
app.use(express.json());
app.use(morganMiddleware);
app.use(routes);

const port = config.get<number>('port');

app.listen(port, async () => {
  await connect();
  Logger.info(`Listening on port ${port}!`);
});
