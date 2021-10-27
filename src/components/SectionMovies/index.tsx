import { Heading } from 'components/Heading';
import { MovieCardList } from 'components/MovieCardList';
import { Section } from 'components/Section';
import { useAppSelector } from 'hooks/use-app-selector';

export const SectionMovies = () => {
  const { movies } = useAppSelector((state) => state.movies);

  return (
    <Section bgColor="black">
      <Heading as="h3" hasTextCenter>
        Filmes mais populares
      </Heading>

      <MovieCardList movies={movies} />
    </Section>
  );
};
