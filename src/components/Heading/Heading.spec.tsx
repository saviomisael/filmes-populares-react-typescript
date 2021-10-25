import { screen } from '@testing-library/react';
import { renderTheme } from 'utils/test-utils';
import { Heading } from '.';

describe('<Heading />', () => {
  it('should renders component with default props', () => {
    renderTheme(<Heading>Some text</Heading>);

    const heading = screen.getByRole('heading', { name: /some text/i });

    expect(heading.tagName.toLowerCase()).toBe('h1');

    expect(heading).toHaveStyleRule('color', '#FFFFFF');

    expect(heading).toHaveStyleRule('text-align', 'left');
  });

  it('should renders component with text color dark when hasColorDark is true', () => {
    renderTheme(<Heading hasColorDark>Some text</Heading>);

    const heading = screen.getByRole('heading', { name: /some text/i });

    expect(heading).toHaveStyleRule('color', '#413B3B');
  });

  it('should renders as a h2 element', () => {
    renderTheme(<Heading as="h2">Some text</Heading>);

    const heading = screen.getByRole('heading', { name: /some text/i });

    expect(heading.tagName.toLowerCase()).toBe('h2');
  });
});
