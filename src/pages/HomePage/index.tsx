import { SectionMovies } from 'components/SectionMovies';
import { SectionTvSeries } from 'components/SectionTvSeries';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { PageTemplate } from 'pages/PageTemplate';
import { useEffect } from 'react';
import { fetchMoviesThunk } from 'store/ducks/movie-duck';
import { fetchTvSeriesThunk } from 'store/ducks/tv-serie-duck';

export const HomePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const tvSeriesActionPromise = dispatch(fetchTvSeriesThunk());
    const moviesActionPromise = dispatch(fetchMoviesThunk());

    return () => {
      tvSeriesActionPromise.abort();
      moviesActionPromise.abort();
    };
  }, [dispatch]);

  return (
    <PageTemplate>
      <SectionTvSeries />
      <SectionMovies />
    </PageTemplate>
  );
};
