import { Meta, Story } from '@storybook/react';
import { Section, SectionProps } from '.';

export default {
  title: 'components/Section',
  component: Section,
  args: {
    children: <h1>Some text</h1>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

const Template: Story<SectionProps> = (args) => <Section {...args} />;

export const WithOrangeBackground = Template.bind({});

WithOrangeBackground.args = {
  bgColor: 'orange',
};

export const WithBlackBackground = Template.bind({});

WithBlackBackground.args = {
  bgColor: 'black',
};

WithBlackBackground.parameters = {
  backgrounds: {
    default: 'light',
  },
};

export const WithManyChildren = Template.bind({});

WithManyChildren.args = {
  children: (
    <div>
      <div>
        <h1>Some text</h1>
      </div>
      <div>
        <h1>Some text</h1>
      </div>
      <div>
        <h1>Some text</h1>
      </div>
      <div>
        <h1>Some text</h1>
      </div>
    </div>
  ),
  bgColor: 'orange',
};
