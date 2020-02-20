/**
 * @author - Wokoro Douye Samuel
 */

import controller from './controller';
import { signupValidations, signinValidations } from './validation';

export default [
  {
    path: '/signup',
    method: 'post',
    handlers: [...signupValidations, controller.createUser]
  },
  {
    path: '/signin',
    method: 'post',
    handlers: [...signinValidations, controller.signIn]
  }
];
