/**
 * @author - Wokoro Douye Samuel
 */

import controller from './controller';
import signupValidations from './validation';

export default [
  {
    path: '/signup',
    method: 'post',
    handlers: [...signupValidations, controller.createUser]
  }
];
