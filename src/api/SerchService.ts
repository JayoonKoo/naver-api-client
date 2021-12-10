import axios from "axios";

class SearchService {
  public static getSearchList = async (search: string) => {
    const url = `/api/compelete/${search}`;
    const { data } = await axios({
      url,
      method: "GET",
    });
    return data;
  };

  public static getSearchResult = async (search: string) => {
    const url = `/api/search/${search}`;
    const { data } = await axios({
      url,
      method: "POST",
      data: {
        search,
      },
    });
    return data;
  };
}

export default SearchService;
