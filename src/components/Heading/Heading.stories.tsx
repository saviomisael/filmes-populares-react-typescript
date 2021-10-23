import { Meta, Story } from '@storybook/react';
import { Heading, HeadingProps } from '.';

export default {
  title: 'components/Heading',
  component: Heading,
  args: {
    children: 'Some text',
    hasColorDark: false,
    as: 'h1',
    hasTextCenter: false,
  },
  argTypes: {
    children: { type: 'string' },
    hasColorDark: { type: 'boolean' },
    hasTextCenter: { type: 'boolean' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />;

export const Heading2: Story<HeadingProps> = Default.bind({});

Heading2.args = {
  as: 'h2',
};

export const Heading3: Story<HeadingProps> = Default.bind({});

Heading3.args = {
  as: 'h3',
};

export const Heading4: Story<HeadingProps> = Default.bind({});

Heading4.args = {
  as: 'h4',
};

export const WithColorDark: Story<HeadingProps> = Default.bind({});

WithColorDark.args = {
  hasColorDark: true,
};

WithColorDark.parameters = {
  backgrounds: {
    default: 'light',
  },
};

export const WithTextCenter: Story<HeadingProps> = Default.bind({});

WithTextCenter.args = {
  hasTextCenter: true,
};
