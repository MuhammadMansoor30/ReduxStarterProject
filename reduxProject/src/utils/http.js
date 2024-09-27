import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:7333/api",   // Adding base url of our server.
});

export default instance;

// NOTES (SEC 7):
// Creating baseUrl for our axios backend requests.