import { renderWithStoreProvider } from 'utils/test-utils';
import { SectionTvSeries } from '.';

describe('<SectionTvSeries />', () => {
  it('should matches with snapshot', () => {
    const { container } = renderWithStoreProvider(<SectionTvSeries />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
