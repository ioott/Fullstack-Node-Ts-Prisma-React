export interface AddTypeParams {
  id: bigint;
  type: string;
  price: number;
  active?: boolean;
  optionals: bigint[];
}

export interface TypeResponse {
  type: string;
  price: number;
  active: boolean;
  optional: {optional: {
    name: string;
  }}[];
}
