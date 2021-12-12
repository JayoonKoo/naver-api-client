export type Compelete = {
  result: boolean;
  query: string[];
  items: Array<Array<string[]>>;
};

export type Product = {
  buyCount: number;
  category1: string;
  category2: string;
  category3: string;
  category4: string;
  image: string;
  insertDate: string;
  productId: string;
  title: string;
  updateDate: string;
};

export type SearchItem =
  | {
      brand: string;
      hprice: string;
      link: string;
      lprice: string;
      maker: string;
      mallName: string;
      productType: string;
    } & Product;

export type SearchResult = {
  display: number;
  items: SearchItem[];
  lastBuildDate: string;
  start: number;
  total: number;
};

export type ChartData = {
  id: string;
  color: string;
  data: [
    {
      x: string;
      y: number;
    }
  ];
};
