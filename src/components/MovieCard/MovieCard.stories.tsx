import { Meta, Story } from '@storybook/react';
import { MovieCard, MovieCardProps } from '.';
import { movieMock } from 'mocks/movie-mock';
import { Movie } from 'models/Movie';

export default {
  title: 'components/MovieCard',
  component: MovieCard,
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

export const Default: Story<MovieCardProps> = (args) => <MovieCard {...args} />;

export const Hover = Default.bind({});

Hover.parameters = {
  pseudo: { hover: true },
};

export const WhenClicked = Default.bind({});

WhenClicked.parameters = {
  pseudo: { active: true },
};
