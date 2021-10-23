import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { BaseStyles } from 'styles/base';
import { theme } from 'styles/theme';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BaseStyles />
      <h1>Oi</h1>
    </ThemeProvider>
  );
};

export default App;
