import { API_KEY, LANGUAGE_REQUEST } from 'utils/constants';
import { mapResponseToMovieModel } from 'utils/map-response-to-model';
import { api } from './api';

export const getMoviesMostPopular = async () => {
  const response = await api.get(`/movie/popular?api_key=${API_KEY}&language=${LANGUAGE_REQUEST}`);

  return mapResponseToMovieModel(response.data.results);
};
