export interface Reviews {
  rating: number;
}

export interface ProductType {
  id: number;
  images: string[];      
  title: string;
  description: string;
  reviews: Reviews[];   
  price: number;
  category: string;
}