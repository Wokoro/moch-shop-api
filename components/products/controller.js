/**
 * @author - Wokoro Douye Samuel
 */

/* eslint-disable class-methods-use-this */

import repository from './repository';
import { sendSuccessMessage, sendErrorMessage } from '../../utils';

/**
 * @class
 */
class ProductController {
  /**
   * @description - Function to create new product
   *
   * @param {object} param0 - Request body property, with product details.
   *
   * @param {object} res - Express response object.
   *
   * @param {object} next - Function to pass control to next function.
   *
   * @return {void} - No return value
   */
  async createProduct({ body }, res, next) {
    const { user: { isadmin } } = body;

    if (!isadmin) {
      return sendErrorMessage(res, 401, 'User Unauthorized');
    }

    try {
      const product = await repository.create(body);
      sendSuccessMessage(res, 200, product);
    } catch (e) {
      next(e);
    }
  }

  /**
 * @description - Function to delete a lready existing products
 *
 * @param {object} req - HTTP request object.
 *
 * @param {object} res - HTTP response object.
 *
 * @param {object} next - Function to pass control to next function.
 *
 * @return {void} - No return value
 */
  async deleteProduct(req, res, next) {
    const {
      body: { user: { isadmin } },
      params: { product_id }
    } = req;

    if (!isadmin) {
      return sendErrorMessage(res, 401, 'User Unauthorized');
    }

    const product = await repository.getOne({ uuid: product_id });

    if (!product) {
      return sendErrorMessage(res, 404, "Product doesn't exist");
    }

    try {
      await repository.delete(product_id);
      sendSuccessMessage(res, 200, 'Deleted product successfully');
    } catch (e) {
      next(e);
    }
  }
}

export default new ProductController();
