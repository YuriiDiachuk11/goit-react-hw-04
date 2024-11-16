import axios from "axios";

const fetchImages = async (query, page) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=5UD8DYrMxBo-IEihraDNL4h45xfwBbotn8LZ1CUQDX4&query=${query}&page=${page}&per_page=10`
  );
  return response.data;
};

export default fetchImages;
