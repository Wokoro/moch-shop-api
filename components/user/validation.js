/**
 * @author - Wokoro Douye Samuel
 */

import { check } from 'express-validator';
import { generateErrorReport } from '../../utils';

export const signupValidations = [
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

export const signinValidations = [
  check('email', 'Email must be valid')
    .escape()
    .trim()
    .isEmail(),

  check('password', 'Password must be valid')
    .escape()
    .trim()
    .not()
    .isEmpty(),

  generateErrorReport
];
