export interface ICar {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: string;
  };
  thumbnail?: string;
}
