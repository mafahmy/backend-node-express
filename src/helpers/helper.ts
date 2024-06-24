import axios from 'axios';

export const getApiNews = async (apiUrl: string) => {
  try {
    const { data } = await axios.get(apiUrl);
    const actualNews = data.articles;
    console.log('data generated from getNews', actualNews);
    return actualNews; 
  } catch (error) {
    console.error(`An error ocurred while fetshing data from api ${error}`);
    throw error;
  }
};
