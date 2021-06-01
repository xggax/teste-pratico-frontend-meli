const Product = require("../models/Product");
const { createsCategoryArray, createsItemDetailCategoryArray } = require("../utils/createsCategoryArray")
const { SEARCH_LIMIT } = require('../config');
const { meliApi } = require('../apis/meliApi');
const { ErrorHandler } = require('../utils/error');

async function searchItems(search) {

  const params = {
    q: search,
    limit: SEARCH_LIMIT
  };
  const products = await meliApi.get('/sites/MLA/search', { params });
  const { results, filters } = products.data;

  const author = {
    name: "Gabriel",
    lastname: "Gama"
  };
  const categories = createsCategoryArray(filters);
  const items = results.map(meliProduct => new Product(meliProduct));

  const data = {
    author,
    categories,
    items
  }

  return data;
}

async function searchItem(id) {
  const itemFound = await meliApi.get(`/items/${id}`);
  const descriptionFound = await meliApi.get(`/items/${id}/description`);

  if (!itemFound) {
    throw new ErrorHandler(404, 'Item not found')
  }

  if (!descriptionFound) {
    throw new ErrorHandler(404, 'Description not found')
  }

  const categoryFound = await meliApi.get(`/categories/${itemFound.data.category_id}`);

  if (!categoryFound) {
    throw new ErrorHandler(404, 'Category not found')
  }

  const product = {
    ...itemFound.data,
    description: descriptionFound.data.plain_text
  };

  const author = {
    name: "Gabriel",
    lastname: "Gama"
  };
  const categories = createsItemDetailCategoryArray(categoryFound);
  const item = new Product(product);

  const data = {
    author,
    categories,
    item
  }

  return data;
}

module.exports = {
  searchItems,
  searchItem
};