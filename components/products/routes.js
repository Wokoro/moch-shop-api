/**
 * @author - Wokoro Douye Samuel
 */

import controller from './controller';
import productValidations from './validation';
import { passToken } from '../../utils';

export default [
  {
    path: '/product',
    method: 'post',
    handlers: [...productValidations, passToken, controller.createProduct]
  }
];
