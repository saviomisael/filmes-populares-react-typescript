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
    hasTextUppercase: false,
  },
  argTypes: {
    children: { type: 'string' },
    hasColorDark: { type: 'boolean' },
    hasTextCenter: { type: 'boolean' },
    hasTextUppercase: { type: 'boolean' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />;

export const Heading2 = Default.bind({});

Heading2.args = {
  as: 'h2',
};

export const Heading3 = Default.bind({});

Heading3.args = {
  as: 'h3',
};

export const Heading4 = Default.bind({});

Heading4.args = {
  as: 'h4',
};

export const WithColorDark = Default.bind({});

WithColorDark.args = {
  hasColorDark: true,
};

WithColorDark.parameters = {
  backgrounds: {
    default: 'light',
  },
};

export const WithTextCenter = Default.bind({});

WithTextCenter.args = {
  hasTextCenter: true,
};

export const WithTextUppercase = Default.bind({});

WithTextUppercase.args = {
  hasTextUppercase: true,
};
