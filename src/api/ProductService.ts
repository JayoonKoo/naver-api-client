import axios from "axios";
import { SearchItem } from "../type";

class ProductService {
  public static getProductList = async () => {
    const url = `/api/product`;
    const { data } = await axios({
      url,
      method: "GET",
    });
    return data;
  };

  public static buyProduct = async (req: SearchItem) => {
    const url = `/api/product/buy`;
    const {
      productId,
      title,
      image,
      category1,
      category2,
      category3,
      category4,
    } = req;
    await axios({
      url,
      method: "POST",
      data: {
        productId,
        title,
        image,
        category1,
        category2,
        category3,
        category4,
        buyCount: 1,
      },
    });
  };

  public static getCategory = async (categoryName?: string) => {
    const url = categoryName
      ? `/api/product/category?categoryName=${categoryName}`
      : `/api/product/category`;
    const { data } = await axios({
      url,
      method: "GET",
    });
    return data;
  };
}

export default ProductService;
