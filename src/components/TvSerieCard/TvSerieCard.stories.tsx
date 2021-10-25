import { Meta, Story } from '@storybook/react';
import { TvSerie } from 'models/TvSerie';
import { TvSerieCard, TvSerieCardProps } from '.';

export default {
  title: 'components/TvSerieCard',
  component: TvSerieCard,
  args: {
    tvSerie: new TvSerie(1, 'Round 6', 7.5, '/6gcHdboppvplmBWxvROc96NJnmm.jpg'),
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
