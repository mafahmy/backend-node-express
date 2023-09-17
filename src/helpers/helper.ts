import axios from 'axios';

export const getApiNews = async (apiUrl: string) => {
  try {
    const { data } = await axios.get(apiUrl);
    console.log('data generated from getNews', data);
    return data;
  } catch (error) {
    console.log(`An error ocurred while fetshing data from api ${error}`);
    throw new Error(`An error ocurred while fetshing data from api ${error}`);
  }
};
