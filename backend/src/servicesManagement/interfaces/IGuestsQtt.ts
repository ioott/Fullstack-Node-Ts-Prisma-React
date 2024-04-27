export interface AddGuestsQttParams {
  id: bigint;
  guestsQtt: number;
  price: number;
  active?: boolean;
  buffets?: bigint[];
}

export interface GuestsQttResponse {
  guestsQtt: number;
  price: number;
  active: boolean;
  buffets?: {buffet: {
    name: string;
  }}[];
}
