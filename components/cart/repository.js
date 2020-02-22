/**
 * @author - Wokoro Douye Samuel
 */

import models from '../../database/models';

const { Cart } = models;

/**
 * @class
 *
 * @description Single entry point for user table.
 */
class CartRepository {
  /**
   * @constructor
   *
   * @returns {object}- Returns an instance of a product.
   */
  constructor() {
    this.model = Cart;
  }

  /**
   * @description - Function to create product.
   *
   * @param {string} param0 - Product's uuid
   *
   * @param {string} param1 - Current user
   *
   * @returns {object} - Returns a promise for cart created.
   */
  async create({ product_uuid, user: { uuid: user_uuid } }) {
    return this.model.create({ user_uuid, product_uuid });
  }

  /**
   * @description - Function to get all user's cart product(s).
   *
   * @param {string} param0 - User's uuid
   *
   * @returns {object} - Returns a promise for cart products.
   */
  async getAll(condition={}, include='') {
    return this.model.findAll({where: condition, include});
  }
}

export default new CartRepository();
