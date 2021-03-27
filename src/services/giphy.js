import environment from '../config/environment';
import axios from 'axios';

export const getTrendingGif = async () => {
  console.log(environment)
  const URL = `http://api.giphy.com/v1/gifs/trending?api_key=WnTEYVz8yJSXIH1ZF4mLgRF33Ey4oC1g&limit=10&rating=g&offset=0`;
  
  try {
    const response = await axios(URL);
    return response.data;
  } catch (error) {
   return error
  }
};
