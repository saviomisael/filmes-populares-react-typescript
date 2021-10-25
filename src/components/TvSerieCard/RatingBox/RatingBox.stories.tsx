import { Meta, Story } from '@storybook/react';
import { RatingBox, RatingBoxProps } from '.';

export default {
  title: 'components/RatingBox',
  component: RatingBox,
  args: { amount: 9.5 },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Default: Story<RatingBoxProps> = (args) => <RatingBox {...args} />;
