import { renderTheme } from 'utils/test-utils';
import { Section } from '.';

describe('<Section />', () => {
  it('should renders component with background orange', () => {
    const { container } = renderTheme(<Section bgColor="orange">Some text</Section>);

    expect(container.firstChild).toHaveStyleRule('background', '#FA9F42');
  });
});
