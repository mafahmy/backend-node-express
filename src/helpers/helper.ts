import axios from 'axios';

export const getApiNews = async (apiUrl: string) => {
  try {
    const { data } = await axios.get(apiUrl);

    const actualNews = data.articles;
    console.log('data generated from getNews', actualNews);
    const actualNewsWithAddedIds = actualNews.map((oneNews: any) => {
      return {
        ...oneNews,
        id: Math.floor((1 + Math.random()) * 0x100000).toString(16),
      };
    });
    console.log('actualNewsWithIds', actualNewsWithAddedIds);
    return actualNewsWithAddedIds;

    // return actualNewsWithAddedIds;
  } catch (error) {
    console.log(`An error ocurred while fetshing data from api ${error}`);
    throw new Error(`An error ocurred while fetshing data from api ${error}`);
  }
};
