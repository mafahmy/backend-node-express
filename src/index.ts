import express, { Request, Response } from 'express';
import config from './config/indexConfig';

const port = config.appConfig.port;
const app = express();
app.get('/', (req, res) => {
  res.send('Connected🚀🚀🚀');
});
const appStart = () => {
  try {
    app.listen(port, () => {
      console.log(`🚀🚀🚀 The app is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.log(`Error ocurred while trying to run the server\n${error}`);
  }
};
appStart();
