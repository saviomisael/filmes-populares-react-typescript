import { Meta, Story } from '@storybook/react';
import { movieMock } from 'mocks/movie-mock';
import { genresMock } from 'mocks/genre-mock';
import { Movie } from 'models/Movie';
import { MovieDetails, MovieDetailsProps } from '.';

export default {
  title: 'components/MovieDetails',
  component: MovieDetails,
  args: {
    movie: new Movie(
      movieMock.id,
      movieMock.name,
      movieMock.rating,
      movieMock.releaseDate,
      movieMock.poster,
      movieMock.overview,
    ),
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Default: Story<MovieDetailsProps> = (args) => <MovieDetails {...args} />;

export const WithGenres = Default.bind({});

WithGenres.args = {
  movie: new Movie(
    movieMock.id,
    movieMock.name,
    movieMock.rating,
    movieMock.releaseDate,
    movieMock.poster,
    movieMock.overview,
    [...genresMock],
  ),
};
