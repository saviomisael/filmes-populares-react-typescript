import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme';
import { BaseStyles } from '../src/styles/base';
import { Provider } from 'react-redux';
import { storeMock } from '../src/mocks/configure-store-mock';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: theme.colors.white,
      },
      {
        name: 'dark',
        value: theme.colors.second,
      },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <Provider store={storeMock}>
      <ThemeProvider theme={theme}>
        <BaseStyles />
        <Story />
      </ThemeProvider>
    </Provider>
  ),
];
