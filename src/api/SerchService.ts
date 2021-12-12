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

  public static getSearchResult = async (search: string, start: number = 1) => {
    console.log(start);

    const url = `/api/search/${search}`;
    const { data } = await axios({
      url,
      method: "POST",
      data: {
        search,
        start,
      },
    });
    return data;
  };
}

export default SearchService;
