/**
 * @author - Wokoro Douye Samuel
 */

import models from '../../database/models';

const { Product } = models;

/**
 * @class
 *
 * @description Single entry point for user table.
 */
class ProductRepository {
  /**
   * @constructor
   *
   * @returns {object}- Returns an instance of a product.
   */
  constructor() {
    this.model = Product;
  }

  /**
   * @description - Function to create product.
   *
   * @param {string} param0 - Product's name
   *
   * @param {string} param1 - Product's description
   *
   * @param {string} param2 - Product's category
   *
   * @param {float} param3 - Product's price
   *
   * @param {string} param4 - Product's image url
   *
   * @param {boolean} param5 - Product's stock status
   *
   * @returns {object} - Returns a promise for product creation.
   */
  async create({
    name, description, category,
    price, image_url, in_stock,
    user: { uuid: user_uuid }
  }) {
    return this.model.create({
      name,
      user_uuid,
      description,
      category,
      price,
      imageUrl: image_url,
      inStock: in_stock
    });
  }

  /**
   * @description - Function to delete product.
   *
   * @param {string} uuid - Product's uuid
   *
   * @returns {object} - Returns a promise for product creation.
   */
  async delete(uuid) {
    const product = await this.getOne({ uuid });
    return product.destroy();
  }

  /**
   * @description - Function get one Products.
   *
   * @param {object} condition - Condition to search for.
   *
   * @param {string} include - Optional associated field to include
   *
   * @returns {object} Returns a promise for product matched.
   */
  async getOne(condition = {}, include = '') {
    return this.model.findOne(
      { where: condition, include }
    );
  }
}

export default new ProductRepository();
