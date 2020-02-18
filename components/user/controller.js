/**
 * @author - Wokoro Douye Samuel
 */

/* eslint-disable class-methods-use-this */

import repository from './repository';
import {
  sendSuccessMessage,
  sendErrorMessage,
  encryptPassword,
  filterUserInfo,
  decryptPassword,
  generateToken
} from '../../utils';

/**
 * @class
 */
class UserController {
  /**
   * @description - Function to create new user
   *
   * @param {object} param0 - Request body property, with signup values.
   *
   * @param {object} res - Express response object.
   *
   * @param {object} next - Function to pass control to next function.
   *
   * @return {void} - No return value
   */
  async createUser({ body }, res, next) {
    const { email, password } = body;

    body.password = encryptPassword(password);

    const user = await repository.getOne({ email });
    if (user) {
      return sendErrorMessage(res, 409, 'User already exists');
    }

    try {
      const dbUser = await repository.create(body);
      const result = filterUserInfo(dbUser);
      sendSuccessMessage(res, 200, result);
    } catch (e) {
      next(e);
    }
  }

  /**
  * @description - Function to signin user
  *
  * @param {object} param0 - Request body property, with signup values.
  *
  * @param {object} res - Express response object.
  *
  * @param {object} next - Function to pass control to next function.
  *
  * @return {void} - No return value
  */
  async signIn({ body }, res, next) {
    const { email, password: planPwd } = body;

    try {
      const user = await repository.getOne({ email });

      if (!user) {
        return sendErrorMessage(res, 401, 'User name or password incorrect');
      }

      const { dataValues } = user;
      const { password, isadmin, email: strEmail } = dataValues;
      const result = decryptPassword(planPwd, password);

      if (result) {
        const token = generateToken({ strEmail, isadmin });
        const response = filterUserInfo(dataValues);
        response.token = token;
        return sendSuccessMessage(res, 200, response);
      }

      return sendErrorMessage(res, 401, 'User name or password incorrect');
    } catch (e) {
      next(e);
    }
  }
}

export default new UserController();
