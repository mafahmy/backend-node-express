import { v4 } from 'uuid';
import newsData from './newsData.json';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const main = async () => {
  try {
    const formattedNews = newsData.map((eachNews) => {
      const { id, ...rest } = eachNews;
      return { ...rest, newsId: v4() };
    });
    for (const newsItem of formattedNews) {
      const { newsId, source, ...newsData } = newsItem;
      let sourceRecord = await prisma.source.findFirst({
        where: { url: source.url },
      });
      if (!sourceRecord) {
        sourceRecord = await prisma.source.create({
          data: {
            name: source.name,
            url: source.url,
          },
        });
        console.log('SOURCE RECORD CREATED: ', source.name);
      }
      await prisma.oneNews.create({
        data: {
          ...newsData,
          newsId,
          source: {
            connect: { id: sourceRecord.id },
          },
        },
      });
      console.log('NEWS ADDED TO DB: ', newsId);
    }
  } catch (error) {
    console.error(`ERROR HAPPEND WHILE SEEDING DATABASE: `, error);
  }
};
main().catch((e) => {
  console.error('ERROR IN MAIN FUNCTION: ', e);
});
