import { API_KEY, LANGUAGE_REQUEST } from 'utils/constants';
import { mapResponseToTvSerieModel } from 'utils/map-response-to-model';
import { api } from './api';

export const getTvSeriesMostPopular = async () => {
  const response = await api.get(`/tv/popular?api_key=${API_KEY}&language=${LANGUAGE_REQUEST}`);

  return mapResponseToTvSerieModel(response.data.results);
};
