import { Meta, Story } from '@storybook/react';
import { TvSerieCard, TvSerieCardProps } from '.';
import { tvSerieMock } from 'mocks/tv-serie-mock';
import { TvSerie } from 'models/TvSerie';

export default {
  title: 'components/TvSerieCard',
  component: TvSerieCard,
  args: {
    tvSerie: new TvSerie(tvSerieMock.id, tvSerieMock.name, tvSerieMock.rating, tvSerieMock.poster),
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Default: Story<TvSerieCardProps> = (args) => <TvSerieCard {...args} />;

export const Hover = Default.bind({});

Hover.parameters = {
  pseudo: { hover: true },
};
