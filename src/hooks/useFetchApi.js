import { useEffect, useState } from "react";
import axios from "axios";
export function useFetchApi(url, reload) {
  const [content, setContent] = useState([]);
  const fetchApi = async () => {
    const { data } = await axios.get("url");
    setContent(data);
  };
  useEffect(() => {
    fetchApi();
    // eslint-disable-next-line
  }, [reload]);
  return { content };
}
