import { Genre } from 'models/Genre';

export class MovieResponse {
  constructor(
    public readonly id: number,
    public readonly title: string,
    public readonly vote_average: number,
    public readonly release_date: string,
    public readonly poster_path: string,
    public readonly overview: string,
    public readonly genres?: Genre[],
  ) {}
}
