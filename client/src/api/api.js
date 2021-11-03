import axios from "axios";

const url = "http://localhost:4000/api/blogs";

export const fetchAllBlogPosts = () => axios.get(url);
