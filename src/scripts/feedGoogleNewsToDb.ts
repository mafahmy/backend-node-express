import indexConfig from '../config/indexConfig';
import { getApiNews } from '../helpers/helper';
import { GoogleNewsArticle } from '../types/googleNews';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  try {
    const newsFromGoogle: GoogleNewsArticle[] = await getApiNews(
      indexConfig.googleNewsApiConfig.url
    );
    const newsToAdd = []; // Array to hold news data for bulk insertion

    for (const news of newsFromGoogle) {
      const { source, ...rest } = news;
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
      // Add the news data to the array
      newsToAdd.push({
        ...rest,
        sourceId: sourceRecord.id,
      });
    }

    // Use createMany to insert all the news records at once
    await prisma.oneNews.createMany({
      data: newsToAdd,
      skipDuplicates: true, // This will skip any duplicates
    });
    console.log('BULK NEWS ADDED TO DB');
  } catch (error) {
    console.error('Error', error);
  }
};
main().catch((e) => {
  if (e instanceof AggregateError) {
    for (const individualError of e.errors) {
      console.error(individualError);
    }
  } else {
    console.error('Unexpected error', e);
  }
});
