import { renderTheme } from 'utils/test-utils';
import { PageTemplate } from '.';

describe('<PageTemplate />', () => {
  it('should matches with snapshot', () => {
    const { container } = renderTheme(
      <PageTemplate>
        <h2>Some text</h2>
      </PageTemplate>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
