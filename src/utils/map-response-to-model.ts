import { TvSerie } from 'models/TvSerie';
import { TvSerieResponse } from 'services/responses/TvSerieResponse';

const mapSingleResponseToTvSerieModel = (response: TvSerieResponse) =>
  new TvSerie(response.id, response.name, response.vote_average, response.poster_path);

export const mapResponseToTvSerieModel = (response: TvSerieResponse[]) =>
  response.map((x) => mapSingleResponseToTvSerieModel(x));
