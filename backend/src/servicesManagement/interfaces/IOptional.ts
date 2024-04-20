export interface AddOptionalParams {
  id: bigint;
  name: string;
  description: string;
  qtt: number;
  active?: boolean;
  types?: bigint[];
  events?: bigint[];
}

export interface OptionalResponse {
  name: string;
  description: string;
  qtt: number;
  active: boolean;
  types: {
    type: {
      type: string;
      price: number;
    }
  }[];
  events: {
    event: {
      date: Date;
      client: {
        name: string;
      };
    }
  }[];
}
