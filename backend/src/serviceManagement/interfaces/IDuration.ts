export interface AddDurationParams {
  id: number;
  duration: number;
  buffets?: number[];
}

export interface DurationResponse {
  duration: number;
  buffets: {
      buffet: {
          name: string;
      };
  }[];
}
