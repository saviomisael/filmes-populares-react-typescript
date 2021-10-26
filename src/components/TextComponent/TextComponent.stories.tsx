import { Meta, Story } from '@storybook/react';
import { TextComponent, TextComponentProps } from '.';

export default {
  title: 'components/TextComponent',
  component: TextComponent,
  args: {
    children: 'Some text',
    hasTextSmall: false,
    hasTextCenter: false,
  },
  argTypes: {
    children: { type: 'string' },
    hasTextSmall: { type: 'boolean' },
    hasTextCenter: { type: 'boolean' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Default: Story<TextComponentProps> = (args) => <TextComponent {...args} />;

export const WithTextSmall = Default.bind({});

WithTextSmall.args = {
  hasTextSmall: true,
};

export const WithTooMuchText = Default.bind({});

WithTooMuchText.args = {
  children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
};

export const WithTextCentered = Default.bind({});

WithTextCentered.args = {
  hasTextCenter: true,
};
