export interface IResponseData {
  uuid: string;
  title: string;
  description: string;
  keywords: string;
  snippet: string;
  url: string;
  image_url: string;
  language: string;
  published_at: string;
  source: string;
  relevance_score: unknown;
  entities: IEntities[];
  similar: [];
}

interface IEntities {
  symbol: string;
  name: string;
  exchange: string;
  exchange_long: string;
  country: string;
  type: string;
  industry: string;
  match_score: number;
  sentiment_score: number;
  highlights: IHighlights[];
}

interface IHighlights {
  highlight: string;
  sentiment: number;
  highlighted_in: string;
}
