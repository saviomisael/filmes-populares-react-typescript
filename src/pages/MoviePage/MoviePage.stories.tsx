import { Meta, Story } from '@storybook/react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import { MoviePage } from '.';

export default {
  title: 'pages/MoviePage',
  component: MoviePage,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta;

export const Default: Story = (args) => <MoviePage {...args} />;

Default.decorators = [
  (Story) => (
    <MemoryRouter initialEntries={['/movies/580489']}>
      <Switch>
        <Route path="/movies/:movieId" render={() => <Story />} />
      </Switch>
    </MemoryRouter>
  ),
];
