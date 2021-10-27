import { Meta, Story } from '@storybook/react';
import { movieListMock } from 'mocks/movie-mock';
import { Movie } from 'models/Movie';
import { MovieCardList, MovieCardListProps } from '.';

export default {
  title: 'components/MovieCardList',
  component: MovieCardList,
  args: {
    movies: movieListMock.map((x) => new Movie(x.id, x.name, x.rating, x.releaseDate, x.poster, x.overview)),
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Default: Story<MovieCardListProps> = (args) => <MovieCardList {...args} />;

export const WhenHaveOnlyOne = Default.bind({});

WhenHaveOnlyOne.args = {
  movies: movieListMock.map((x) => new Movie(x.id, x.name, x.rating, x.releaseDate, x.poster, x.overview)).slice(0, 1),
};

export const WhenHaveTooMuch = Default.bind({});

WhenHaveTooMuch.args = {
  movies: movieListMock
    .map((x) => new Movie(x.id, x.name, x.rating, x.releaseDate, x.poster, x.overview))
    .concat(
      movieListMock.map((x, index) => new Movie(x.id + index, x.name, x.rating, x.releaseDate, x.poster, x.overview)),
    ),
};
