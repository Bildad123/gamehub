import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f65ba123605345708cacd2fd1847bd82",
  },
});
