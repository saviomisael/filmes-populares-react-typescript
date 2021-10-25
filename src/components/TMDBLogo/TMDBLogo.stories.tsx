import { Meta, Story } from '@storybook/react';
import { TMDBLogo } from '.';

export default {
  title: 'components/TMDBLogo',
  component: TMDBLogo,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Default: Story = (args) => <TMDBLogo {...args} />;
