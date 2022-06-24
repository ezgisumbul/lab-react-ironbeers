import axios from 'axios';

const beerApi = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com'
  //   withCredentials: true
});

export const addBeer = (beer) => {
  beerApi.post('/beers/new', beer).then((response) => response.data);
};

// export const loadBeerList = () => {
//   beerApi.get('/beers').then((response) => response.data);
// };

// export const loadSingleBeer = (id) => {
//   beerApi.get(`/beers/${id}`).then((response) => response.data);
// };

// export const loadRandomBeer = () => {
//   beerApi.get('/beers/random').then((response) => response.data);
// };
