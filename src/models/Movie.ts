import { IMAGE_URL } from 'utils/constants';
import { Genre } from './Genre';

export class Movie {
  private _genres: Genre[];

  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly rating: number,
    public readonly releaseDate: Date,
    public readonly poster: string,
    public readonly overview: string,
    genresList?: Genre[],
  ) {
    this.poster = `${IMAGE_URL}${poster}`;
    this._genres = genresList ?? [];
  }

  get genres() {
    return this._genres;
  }
}
