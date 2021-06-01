const { decimalPart } = require("../utils/decimalPart");

class Product {
  constructor(data) {
    const {
      id,
      title,
      price,
      currency_id,
      thumbnail,
      condition,
      shipping,
      sold_quantity,
      description
    } = data;

    this.id = id;
    this.price = {
      currency: currency_id,
      amount: price.toString(),
      decimals: decimalPart(price)
    };
    this.title = title;
    this.description = description;
    this.picture = thumbnail;
    this.condition = condition;
    this.sold_quantity = sold_quantity;
    this.free_shipping = shipping.free_shipping;
  }
}

module.exports = Product;