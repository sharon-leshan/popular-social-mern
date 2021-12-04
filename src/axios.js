import axios from "axios";

const instance = axios.create({
  baseURL: "https://popular-social-mern-maleo.herokuapp.com",
});
export default instance;
