/**
 * @author - Wokoro Douye Samuel
 */

/* eslint-disable class-methods-use-this */

import repository from './repository';
import { sendSuccessMessage } from '../../utils';

/**
 * @class
 */
class CartController {
  /**
   * @description - Function to create new product in cart
   *
   * @param {object} req - Express request body property.
   *
   * @param {object} res - Express response object.
   *
   * @param {object} next - Function to pass control to next function.
   *
   * @return {void} - No return value
   */
  async addToCart(req, res, next) {
    const { body, params: { product_id } } = req;
    body.product_uuid = product_id;
    try {
      const cart = await repository.create(body);
      sendSuccessMessage(res, 200, cart);
    } catch (e) {
      next(e);
    }
  }
}

export default new CartController();