import axios from "axios";

const requestNou = axios.create({
    baseURL: "http://localhost:3000/api/", withCredentials:true,
});

export default requestNou;