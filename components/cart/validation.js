/**
 * @author - Wokoro Douye Samuel
 */

import { check } from 'express-validator';
import { generateErrorReport } from '../../utils';

export const productValidations = [
  check('name', 'Name must be present')
    .isString()
    .trim()
    .escape(),
  check('name', 'Name must not be an integer')
    .not()
    .isNumeric(),
  check('name', 'Name must contain atleast three letters')
    .isLength({
      min: 3
    }),

  check('description', 'Description must be present')
    .trim()
    .escape()
    .isString(),
  check('description', 'Name must not be an integer')
    .not()
    .isNumeric(),

  check('category', 'Category must not be empty')
    .trim()
    .escape()
    .not()
    .isEmpty(),
  check('category', 'Product category must be valid')
    .escape()
    .trim()
    .isIn(['clothes', 'electronics', 'book']),

  check('price', 'Product\'s price must be valid')
    .escape()
    .trim()
    .isFloat(),

  check('image_url', 'Product image url must be a valid url')
    .isURL(),

  check('in_stock', 'Product stock status must be valid, true or false')
    .escape()
    .trim()
    .isBoolean(),

  generateErrorReport
];

export const productUUIDValidation = [
  check('product_id', 'Must not be empty')
    .trim()
    .escape()
    .not()
    .isEmpty(),
  check('product_id', 'Invalid product uuid')
    .trim()
    .escape()
    .isUUID(),

  generateErrorReport
];
