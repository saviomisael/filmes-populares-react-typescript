import { render } from '@testing-library/react';
import { BaseStyles } from 'styles/base';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { storeMock } from 'mocks/configure-store-mock';

export const renderTheme = (children: ReactNode) =>
  render(
    <ThemeProvider theme={theme}>
      <BaseStyles />
      {children}
    </ThemeProvider>,
  );

export const renderWithStoreProvider = (children: ReactNode) =>
  render(
    <Provider store={storeMock}>
      <ThemeProvider theme={theme}>
        <BaseStyles />
        {children}
      </ThemeProvider>
    </Provider>,
  );
