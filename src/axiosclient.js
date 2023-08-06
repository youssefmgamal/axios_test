import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com"
const apiClient = axios.create({baseURL:URL, Headers:{"content-type":"application/json"}})


export default apiClient