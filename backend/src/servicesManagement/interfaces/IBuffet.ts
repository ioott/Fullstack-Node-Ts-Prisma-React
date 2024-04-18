export interface AddBuffetParams {
  id: number;
  name: string;
  description: string;
  events?: number[];
  durations: number[];
  guestsQtts: number[];
}

export interface BuffetResponse {
  name: string;
  description: string;
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
