import axios from "axios";
import { useEffect, useState } from "react";

const ConnectApi = (url) => {
  //when we make request its set to true, after its set to false
  const [fetch, setFetching] = useState({ isFetching: false });
  const [dataState, setDataState] = useState({ data: [] });
  const [apiurl] = useState(url);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        setFetching({ isFetching: true });
        const response = await axios.get(apiurl);
        setDataState(response)
        // console.log(response)÷
      } catch (e) {
        setFetching({ ...fetch, isFetching: true });
      }
    };
    fetchDataFromApi();
  }, []);
  return dataState;
};

export default ConnectApi;
