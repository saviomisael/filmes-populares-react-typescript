import { FC } from 'react';
import { AppRouter } from 'routes/AppRouter';
import { StoreProvider } from 'store/StoreProvider';
import { ThemeProvider } from 'styled-components';
import { BaseStyles } from 'styles/base';
import { theme } from 'styles/theme';

const App: FC = () => {
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <BaseStyles />
        <AppRouter />
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
