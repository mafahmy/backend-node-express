import express, { Request, Response } from 'express';
import cors from 'cors';
import config from './config/indexConfig';
import middleware from './middleware';
import routes from './router/index';
import { connectMongoDB } from './databases/mongodb/dbConnect';

const port = config.appConfig.port;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(routes);
app.get('/', (req, res) => {
  res.send('Connected🚀🚀🚀');
});
const appStart = async () => {
  try {
    app.listen(port, () => {
      console.log(`🚀🚀🚀 The app is running at http://localhost:${port}`);
    });
    await connectMongoDB();
  } catch (error) {
    console.log(`Error ocurred while trying to run the server\n${error}`);
  }
};
app.use(middleware.errorHandlingMiddleware);
appStart();
