import { SectionMovies } from 'components/SectionMovies';
import { SectionTvSeries } from 'components/SectionTvSeries';
import { PageTemplate } from 'pages/PageTemplate';

export const HomePage = () => {
  return (
    <PageTemplate>
      <SectionTvSeries />
      <SectionMovies />
    </PageTemplate>
  );
};
