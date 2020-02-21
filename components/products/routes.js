/**
 * @author - Wokoro Douye Samuel
 */

import controller from './controller';
import { productValidations, productUUIDValidation } from './validation';
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
    handlers: [...productUUIDValidation, passToken, controller.deleteProduct]
  },
  {
    path: '/products/:product_id',
    method: 'put',
    handlers: [
      ...productValidations,
      ...productUUIDValidation,
      passToken,
      controller.updateProduct
    ]
  },
  {
    path: '/products',
    method: 'get',
    handlers: [controller.getProducts]
  },
];
