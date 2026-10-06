export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  thumbnail: string;
}

export interface ProductsResponse {
  products: Product[];
}
