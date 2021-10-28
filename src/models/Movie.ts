import { IMAGE_URL } from 'utils/constants';
import { Genre } from './Genre';

export class Movie {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly rating: number,
    public readonly releaseDate: Date,
    public readonly poster: string,
    public readonly overview: string,
    public readonly genres?: Genre[],
  ) {
    this.poster = `${IMAGE_URL}${poster}`;
    this.genres = genres ?? [];
  }
}
