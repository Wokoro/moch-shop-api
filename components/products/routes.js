/**
 * @author - Wokoro Douye Samuel
 */

import controller from './controller';
import { productValidations, productDeleteValidations } from './validation';
import { passToken } from '../../utils';

export default [
  {
    path: '/product',
    method: 'post',
    handlers: [...productValidations, passToken, controller.createProduct]
  },
  {
    path: '/product/:product_id',
    method: 'delete',
    handlers: [...productDeleteValidations, passToken, controller.deleteProduct]
  }
];
