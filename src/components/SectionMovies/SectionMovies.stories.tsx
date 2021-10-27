import { Meta, Story } from '@storybook/react';
import { SectionMovies } from '.';

export default {
  title: 'components/SectionMovies',
  component: SectionMovies,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Default: Story = (args) => <SectionMovies {...args} />;
