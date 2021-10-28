import { Meta, Story } from '@storybook/react';
import { ExternalLink, ExternalLinkProps } from '.';

export default {
  title: 'components/ExternalLink',
  component: ExternalLink,
  args: { to: 'https://google.com', children: 'Google' },

  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Default: Story<ExternalLinkProps> = (args) => <ExternalLink {...args} />;
