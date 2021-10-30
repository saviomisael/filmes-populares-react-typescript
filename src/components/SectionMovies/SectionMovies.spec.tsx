import { renderWithRouter } from 'utils/test-utils';
import { SectionMovies } from '.';

describe('<SectionMovies />', () => {
  it('should matches with snapshot', () => {
    const { container } = renderWithRouter(<SectionMovies />, {
      pathname: '/',
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
