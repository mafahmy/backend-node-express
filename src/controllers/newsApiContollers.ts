import { Request, Response } from 'express';
import indexConfig from '../config/indexConfig';
import { getApiNews } from '../helpers/helper';

// News controllers
export const fetchApiNewsController = async (req: Request, res: Response) => {
  try {
    const news = await getApiNews(indexConfig.googleNewsApiConfig.url);
    res.status(200).send(news);
  } catch (error) {
    res.status(500).send({
      message: `An error in the news controller occured while getting news from api ${error}`,
    });
  }
};
