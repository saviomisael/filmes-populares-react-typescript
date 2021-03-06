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

  it('should renders text more small when hasTextSmall is true', () => {
    renderTheme(<TextComponent hasTextSmall>Some text</TextComponent>);

    const text = screen.getByText('Some text');

    expect(text).toHaveStyleRule('font-size', '1.4rem');
  });

  it('should renders text centered when hasTextCenter is true', () => {
    renderTheme(<TextComponent hasTextCenter>Some text</TextComponent>);

    const text = screen.getByText('Some text');

    expect(text).toHaveStyleRule('text-align', 'center');
  });

  it('should matches with snapshot', () => {
    renderTheme(<TextComponent hasTextCenter>Some text</TextComponent>);

    const text = screen.getByText('Some text');

    expect(text).toMatchSnapshot();
  });
});
