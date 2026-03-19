import axios from 'axios';

const API_KEY = '55097686-021960f1602add3603143e36a';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  const searchParams = {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  };

  return axios.get(BASE_URL, searchParams)
    .then(response => response.data);
}