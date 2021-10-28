export class TvSerieResponse {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly vote_average: number,
    public readonly poster_path: string,
  ) {}
}
