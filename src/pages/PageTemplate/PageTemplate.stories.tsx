import { Meta, Story } from '@storybook/react';
import { WithChildren } from 'utils/with-children';
import { PageTemplate } from '.';

export default {
  title: 'components/PageTemplate',
  component: PageTemplate,
  args: {
    children: <h2>Some text</h2>,
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Default: Story<WithChildren> = (args) => <PageTemplate {...args} />;
