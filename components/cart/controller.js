/**
 * @author - Wokoro Douye Samuel
 */

/* eslint-disable class-methods-use-this */

import repository from './repository';
import { sendSuccessMessage, sendErrorMessage } from '../../utils';

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

  /**
   * @description - Function to view all products in cart
   *
   * @param {object} param0 - Express request body property.
   *
   * @param {object} res - Express response object.
   *
   * @param {object} next - Function to pass control to next function.
   *
   * @return {void} - No return value
   */
  async viewCartProducts({ body }, res, next) {
    const { user: { uuid } } = body;
    try {
      const cart = await repository.getAll({ user_uuid: uuid });

      if (cart.length === 0) {
        return sendSuccessMessage(res, 200, 'Cart is empty');
      }
      sendSuccessMessage(res, 200, cart);
    } catch (e) {
      next(e);
    }
  }

  /**
   * @description - Function to delete specific product from cart
   *
   * @param {object} param0 - Express request body object.
   *
   * @param {object} res - Express response object.
   *
   * @param {object} next - Function to pass control to next function.
   *
   * @return {void} - No return value
   */
  async deleteProduct(req, res, next) {
    const {
      params: { product_id: product_uuid },
      body: { user: { uuid: user_uuid } }
    } = req;

    try {
      const cart = await repository.getOne(
        { user_uuid, product_uuid }
      );

      if (!cart) {
        return sendSuccessMessage(res, 200, 'Product does\'nt exist in cart');
      }

      const cartDetails = await cart.get();

      if (cartDetails.user_uuid === user_uuid) {
        cart.destroy();
        return sendSuccessMessage(res, 200, 'Product removed from cart');
      }

      sendErrorMessage(res, 401, 'User unauthorize');
    } catch (e) {
      next(e);
    }
  }
}

export default new CartController();
