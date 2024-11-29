export interface Farm {
  id: number;
  name: string;
  description: string;
  address: string;
  latitude: number;
  longitude: number;
  products: string[];
  imageUrl: string;
}