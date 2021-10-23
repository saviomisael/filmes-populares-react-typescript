import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      first: string;
      second: string;
      third: string;
      white: string;
      gray: string;
    };

    fonts: {
      family: {
        redRose: string;
      };
      sizes: {
        small: string;
        default: string;
        medium: string;
        large: string;
        largest: string;
        huge: string;
      };
    };
  }
}
