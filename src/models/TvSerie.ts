import { IMAGE_URL } from 'utils/constants';

export class TvSerie {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly rating: number,
    public readonly poster: string,
  ) {
    this.poster = `${IMAGE_URL}${poster}`;
  }
}
