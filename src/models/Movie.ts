import { IMAGE_URL } from 'utils/constants';

export class Movie {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly rating: number,
    public readonly releaseDate: Date,
    public readonly poster: string,
    public readonly overview: string,
  ) {
    this.poster = `${IMAGE_URL}${poster}`;
  }
}
