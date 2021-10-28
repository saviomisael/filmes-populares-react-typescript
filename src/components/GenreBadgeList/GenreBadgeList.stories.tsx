import { Meta, Story } from '@storybook/react';
import { genresMock } from 'mocks/genre-mock';
import { Genre } from 'models/Genre';
import { GenreBadgeList, GenreBadgeListProps } from '.';

export default {
  title: 'components/GenreBadgeList',
  component: GenreBadgeList,
  args: {
    genres: genresMock.map((x) => new Genre(x.id, x.name)),
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Default: Story<GenreBadgeListProps> = (args) => <GenreBadgeList {...args} />;
