import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      [index: string]: string;
    };
    fonts: {
      family: {
        [index: string]: string;
      };
      sizes: {
        [index: string]: string;
      };
    };
  }
}
