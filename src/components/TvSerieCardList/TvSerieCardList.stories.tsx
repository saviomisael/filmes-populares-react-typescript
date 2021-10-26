import { Meta, Story } from '@storybook/react';
import { TvSerieCardList, TvSerieCardListProps } from '.';
import { tvSerieListMock } from 'mocks/tv-serie-mock';
import { TvSerie } from 'models/TvSerie';

export default {
  title: 'components/TvSerieCardList',
  component: TvSerieCardList,
  args: { series: tvSerieListMock.map((x) => new TvSerie(x.id, x.name, x.rating, x.poster)) },
  argTypes: { series: { type: 'array' } },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Default: Story<TvSerieCardListProps> = (args) => <TvSerieCardList {...args} />;
