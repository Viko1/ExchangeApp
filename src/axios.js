import axios from "axios"

const instance = axios.create({
   baseURL: "http://api.nbp.pl/api/exchangerates/tables/a"
});

export default instance;