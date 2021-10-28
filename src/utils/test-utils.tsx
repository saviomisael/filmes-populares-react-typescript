import { render } from '@testing-library/react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import { BaseStyles } from 'styles/base';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { storeMock } from 'mocks/configure-store-mock';

type optionsWithRouter = {
  initialRoutes?: string[];
  pathname: string;
};

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

export const renderWithRouter = (children: ReactNode, options: optionsWithRouter) => {
  const initialRoutes = options.initialRoutes && options.initialRoutes.length > 0 ? options.initialRoutes : ['/'];

  return render(
    <Provider store={storeMock}>
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={initialRoutes}>
          <Switch>
            <Route path={options.pathname} render={() => children} />
          </Switch>
        </MemoryRouter>
      </ThemeProvider>
    </Provider>,
  );
};
