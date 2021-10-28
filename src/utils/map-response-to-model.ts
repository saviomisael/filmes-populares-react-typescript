import { Movie } from 'models/Movie';
import { TvSerie } from 'models/TvSerie';
import { MovieResponse } from 'services/responses/MovieResponse';
import { TvSerieResponse } from 'services/responses/TvSerieResponse';

const mapSingleResponseToTvSerieModel = (response: TvSerieResponse) =>
  new TvSerie(response.id, response.name, response.vote_average, response.poster_path);

export const mapResponseToTvSerieModel = (response: TvSerieResponse[]) =>
  response.map((x) => mapSingleResponseToTvSerieModel(x));

const mapSingleResponseToMovieModel = (response: MovieResponse) =>
  new Movie(
    response.id,
    response.title,
    response.vote_average,
    new Date(response.release_date),
    response.poster_path,
    response.overview,
    response.genres,
  );

export const mapResponseToMovieModel = (response: MovieResponse[]) =>
  response.map((x) => mapSingleResponseToMovieModel(x));
