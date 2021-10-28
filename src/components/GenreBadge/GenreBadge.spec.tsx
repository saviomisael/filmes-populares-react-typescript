import { genreMock } from 'mocks/genre-mock';
import { Genre } from 'models/Genre';
import { renderTheme } from 'utils/test-utils';
import { GenreBadge } from '.';

describe('<GenreBadge />', () => {
  it('should matches with snapshot', () => {
    const genre = new Genre(genreMock[0].id, genreMock[0].name);

    const { container } = renderTheme(<GenreBadge genre={genre} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
