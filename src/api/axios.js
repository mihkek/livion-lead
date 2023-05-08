import axios from "axios";

export const serverUrl = "https://livionclass.ru";
export const apiUrl = serverUrl + "/api/v1";

axios.defaults.baseURL = apiUrl;

export default axios;
