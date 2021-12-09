export type Compelete = {
  result: boolean;
  query: string[];
  items: Array<Array<string[]>>;
};

export type SearchItem = {
  brand: string;
  category1: string;
  category2: string;
  category3: string;
  category4: string;
  hprice: string;
  image: string;
  link: string;
  lprice: string;
  maker: string;
  mallName: string;
  productId: string;
  productType: string;
  title: string;
};

export type SearchResult = {
  display: number;
  items: SearchItem[];
  lastBuildDate: string;
  start: number;
  total: number;
};
