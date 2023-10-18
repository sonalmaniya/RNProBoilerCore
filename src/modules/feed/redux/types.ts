export interface Feed {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface FeedState {
  loading: boolean;
  data: Feed[];
  error: any;
}
