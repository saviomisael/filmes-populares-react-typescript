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

    expect(heading).toHaveStyleRule('text-transform', 'none');
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

  it('should renders as a h3 element', () => {
    renderTheme(<Heading as="h3">Some text</Heading>);

    const heading = screen.getByRole('heading', { name: /some text/i });

    expect(heading.tagName.toLowerCase()).toBe('h3');
  });

  it('should renders as a h4 element', () => {
    renderTheme(<Heading as="h4">Some text</Heading>);

    const heading = screen.getByRole('heading', { name: /some text/i });

    expect(heading.tagName.toLowerCase()).toBe('h4');
  });

  it('should renders text align to center when hasTextCenter is true', () => {
    renderTheme(<Heading hasTextCenter>Some text</Heading>);

    const heading = screen.getByRole('heading', { name: /some text/i });

    expect(heading).toHaveStyleRule('text-align', 'center');
  });

  it('should renders text uppercase when hasTextUppercase is true', () => {
    renderTheme(<Heading hasTextUppercase>Some text</Heading>);

    const heading = screen.getByRole('heading', { name: /some text/i });

    expect(heading).toHaveStyleRule('text-transform', 'uppercase');
  });
});
