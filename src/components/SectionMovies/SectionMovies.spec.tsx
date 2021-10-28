import { renderWithStoreProvider } from 'utils/test-utils';
import { SectionMovies } from '.';

describe('<SectionMovies />', () => {
  it('should matches with snapshot', () => {
    const { container } = renderWithStoreProvider(<SectionMovies />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
