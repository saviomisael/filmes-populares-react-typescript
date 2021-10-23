import { render } from '@testing-library/react';
import { BaseStyles } from 'styles/base';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import { ReactNode } from 'react';

export const renderTheme = (children: ReactNode) =>
  render(
    <ThemeProvider theme={theme}>
      <BaseStyles />
      {children}
    </ThemeProvider>,
  );
