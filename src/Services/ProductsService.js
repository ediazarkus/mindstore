import axios from 'axios';

const apiUrl = 'https://fakestoreapi.com/products';

const fetchData = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default fetchData;
