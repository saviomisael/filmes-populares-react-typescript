import { Meta, Story } from '@storybook/react';
import { HomePage } from '.';

export default {
  title: 'pages/HomePage',
  component: HomePage,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Default: Story = (args) => <HomePage {...args} />;
