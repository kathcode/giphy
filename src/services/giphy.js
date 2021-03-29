import environment from '../config/environment';
import axios from 'axios';


export const getTrendingGif = async (offset, limit = 10) => {
  const URL = `http://api.giphy.com/v1/gifs/trending?api_key=${environment.API_KEY}&limit=${limit}&offset=${offset}`;
  
  try {
    const response = await axios(URL);
    return response.data;
  } catch (error) {
   return error
  }
};

export const searchGif = async (term) => {
  const URL = `http://api.giphy.com/v1/gifs/search?api_key=${environment.API_KEY}&q=${term}`;
  
  try {
    const response = await axios(URL);
    return response.data;
  } catch (error) {
   return error
  }
};

export const getRandomGif = async (term) => {
  const URL = `http://api.giphy.com/v1/gifs/random?api_key=${environment.API_KEY}&tag=${term}`;
  
  try {
    const response = await axios(URL);
    return response.data;
  } catch (error) {
   return error
  }
};
