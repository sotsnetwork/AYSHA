
export type Page = 'home' | 'collections' | 'showroom' | 'story' | 'contact';

export interface CollectionItem {
  id: string;
  title: string;
  description: string;
  category: string;
  subCategory?: string;
  image: string;
  price?: string;
  isNewArrival?: boolean;
  isBestSeller?: boolean;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
