import { renderTheme } from 'utils/test-utils';
import { Section } from '.';

describe('<Section />', () => {
  it('should renders component with background orange', () => {
    const { container } = renderTheme(<Section bgColor="orange">Some text</Section>);

    expect(container.firstChild).toHaveStyleRule('background', '#FA9F42');
  });

  it('should renders component with background black', () => {
    const { container } = renderTheme(<Section bgColor="black">Some text</Section>);

    expect(container.firstChild).toHaveStyleRule('background', '#413B3B');
  });

  it('should matches with snapshot', () => {
    const { container } = renderTheme(<Section bgColor="orange">Some text</Section>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
