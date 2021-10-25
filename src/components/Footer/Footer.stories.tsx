import { Meta, Story } from '@storybook/react';
import { Footer } from '.';

export default {
  title: 'components/Footer',
  component: Footer,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Default: Story = (args) => <Footer {...args} />;
