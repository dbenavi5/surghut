import Axios from "axios";

let urls = {
    test: `/api/`,
    development: 'http://localhost:3333/',
    production: 'https://your-production-url.com/'
}
const api = Axios.create({
    baseURL: urls.test,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default api;