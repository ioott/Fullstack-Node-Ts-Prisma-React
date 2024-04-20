export interface AddDurationParams {
  id: bigint;
  duration: number;
  active?: boolean;
  buffets?: bigint[];
}

export interface DurationResponse {
  duration: number;
  active: boolean;
  buffets: {
      buffet: {
          name: string;
      };
  }[];
}
