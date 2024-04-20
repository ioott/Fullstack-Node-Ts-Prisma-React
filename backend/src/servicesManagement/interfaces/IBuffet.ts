export interface AddBuffetParams {
  id: bigint;
  name: string;
  description: string;
  active?: boolean;
  events?: bigint[];
  durations: bigint[];
  guestsQtts: bigint[];
}

export interface BuffetResponse {
  name: string;
  description: string;
  active: boolean;
  events: {
      date: Date;
      client: {
          name: string;
      };
  }[];
  durations: {
      duration: {
          duration: number;
      };
  }[];
  guestsQtts: {
      guestsQtt: {
          guestsQtt: number;
          price: number;
      };
  }[];
}
