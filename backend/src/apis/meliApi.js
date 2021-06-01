const axios = require("axios");

const meliApi = axios.create({
  baseURL: "https://api.mercadolibre.com",
});

module.exports = {
  meliApi
}