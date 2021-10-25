import { screen } from '@testing-library/react';
import { renderTheme } from 'utils/test-utils';
import { TextComponent } from '.';

describe('<TextComponent />', () => {
  it('should renders component with default props', () => {
    renderTheme(<TextComponent>Some text</TextComponent>);

    const text = screen.getByText('Some text');

    expect(text).toHaveStyleRule('font-size', '1.8rem');

    expect(text).toHaveStyleRule('text-align', 'left');
  });
});
