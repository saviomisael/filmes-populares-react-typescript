import { Meta, Story } from '@storybook/react';
import { GenreBadge, GenreBadgeProps } from '.';

export default {
  title: 'components/GenreBadge',
  component: GenreBadge,
  args: {
    genre: {
      id: 1,
      name: 'Action',
    },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Default: Story<GenreBadgeProps> = (args) => <GenreBadge {...args} />;
