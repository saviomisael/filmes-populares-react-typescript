import { Meta, Story } from '@storybook/react';
import { Header } from '.';

export default {
  title: 'components/Header',
  component: Header,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta;

export const Default: Story = (args) => <Header {...args} />;
