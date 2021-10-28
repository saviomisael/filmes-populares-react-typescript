import { genresMock } from 'mocks/genre-mock';
import { Genre } from 'models/Genre';
import { renderTheme } from 'utils/test-utils';
import { GenreBadgeList } from '.';

describe('<GenreBadgeList />', () => {
  it('should matches with snapshot', () => {
    const genres = genresMock.map((x) => new Genre(x.id, x.name));

    const { container } = renderTheme(<GenreBadgeList genres={genres} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
