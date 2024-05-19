import axios from "axios";

const requestNou = axios.create({
    baseURL: "http://localhost:443/api/", withCredentials:true,
});

export default requestNou;