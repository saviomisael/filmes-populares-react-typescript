import { Heading } from 'components/Heading';
import { Section } from 'components/Section';
import { TvSerieCardList } from 'components/TvSerieCardList';
import { useAppSelector } from 'hooks/use-app-selector';

export const SectionTvSeries = () => {
  const { tvSeries } = useAppSelector((state) => state.tvSeries);

  return (
    <Section bgColor="orange">
      <Heading hasColorDark>Séries mais assistidas</Heading>
      <TvSerieCardList series={tvSeries} />
    </Section>
  );
};
