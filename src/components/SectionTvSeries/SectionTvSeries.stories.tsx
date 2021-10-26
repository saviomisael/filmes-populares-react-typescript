import { Meta, Story } from '@storybook/react';
import { SectionTvSeries } from '.';

export default {
  title: 'components/SectionTvSeries',
  component: SectionTvSeries,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Default: Story = (args) => <SectionTvSeries {...args} />;
