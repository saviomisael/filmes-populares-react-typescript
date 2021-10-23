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
});
