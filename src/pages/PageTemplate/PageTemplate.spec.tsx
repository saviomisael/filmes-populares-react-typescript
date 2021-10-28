import { renderWithRouter } from 'utils/test-utils';
import { PageTemplate } from '.';

describe('<PageTemplate />', () => {
  it('should matches with snapshot', () => {
    const { container } = renderWithRouter(
      <PageTemplate>
        <h2>Some text</h2>
      </PageTemplate>,
      {
        pathname: '/',
      },
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
