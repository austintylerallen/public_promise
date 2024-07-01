import axios from 'axios';

const API_URL = 'http://localhost:5001/api/politicians';

export const getPoliticians = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching politicians', error);
    throw error;
  }
};
