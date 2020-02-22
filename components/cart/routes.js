/**
 * @author - Wokoro Douye Samuel
 */

import controller from './controller';
import { productUUIDValidation } from './validation';
import { passToken } from '../../utils';

export default [
  {
    path: '/cart/:product_id',
    method: 'post',
    handlers: [...productUUIDValidation, passToken, controller.addToCart]
  }
];
