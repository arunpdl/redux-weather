import axios from 'axios';

export const postLocation = location => {
  const endpoint = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=9a79961db574319474622ee9696d967b`;
  return axios
    .get(endpoint)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error.response.data;
    });
};
