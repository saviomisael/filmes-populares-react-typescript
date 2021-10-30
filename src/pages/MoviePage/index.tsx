import { useEffect } from 'react';
import { useParams } from 'react-router';
import { MovieDetails } from 'components/MovieDetails';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { useAppSelector } from 'hooks/use-app-selector';
import { PageTemplate } from 'pages/PageTemplate';
import { fetchSingleMovieThunk } from 'store/ducks/movie-duck';

interface ParamsTypes {
  movieId: string;
}

export const MoviePage = () => {
  const { singleMovie } = useAppSelector((state) => state.movies);
  const dispatch = useAppDispatch();
  const { movieId } = useParams<ParamsTypes>();

  useEffect(() => {
    const singleMovieActionPromise = dispatch(fetchSingleMovieThunk(Number(movieId)));

    return () => {
      singleMovieActionPromise.abort();
    };
  }, [movieId, dispatch]);

  return (
    <PageTemplate>
      <MovieDetails movie={singleMovie} />
    </PageTemplate>
  );
};
