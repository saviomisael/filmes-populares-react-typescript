import { API_KEY, LANGUAGE_REQUEST } from 'utils/constants';
import { mapResponseToMovieModel, mapSingleResponseToMovieModel } from 'utils/map-response-to-model';
import { api } from './api';

interface MovieByIdBody {
  id: number;
}

export const getMoviesMostPopular = async () => {
  const response = await api.get(`/movie/popular?api_key=${API_KEY}&language=${LANGUAGE_REQUEST}`);

  return mapResponseToMovieModel(response.data.results);
};

export const getMovieById = async ({ id }: MovieByIdBody) => {
  const response = await api.get(`/movie/${id}?api_key=${API_KEY}&language=${LANGUAGE_REQUEST}`);

  return mapSingleResponseToMovieModel(response.data);
};
