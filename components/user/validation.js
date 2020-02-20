/**
 * @author - Wokoro Douye Samuel
 */

import { check } from 'express-validator';
import { generateErrorReport } from '../../utils';

export default [
  check('firstname', 'Firstname must be valid')
    .escape()
    .trim()
    .not()
    .isEmpty(),

  check('lastname', 'Lastname must be valid')
    .escape()
    .trim()
    .not()
    .isEmpty(),

  check('email', 'email must be valid')
    .escape()
    .trim()
    .isEmail(),

  check('password', 'password must be valid')
    .escape()
    .trim()
    .exists(),

  generateErrorReport
];
