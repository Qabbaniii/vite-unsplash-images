import axios from "axios";

const customPhotosFetch = axios.create({
  baseURL: "https://api.unsplash.com/search/photos",
});

export default customPhotosFetch;
