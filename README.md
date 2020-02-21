[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Mock Shop
Mock Shop is a private shoping API that is meant to power moch shop front-end. It helps users and admin to easily carry out activities involved in shopping and managing cart products.

Moch Shop provides users a handful of other functionalities, which includes options to view all products and manage seleted products in cart etc.

## Requirements
Moch Shop is built with Node.js which is a backend technology and [Express](https://expressjs.com) server which is a framework that enables creating Node.js applications easier.

Moch Shop requires the installation of [Node.js](http://nodejs.org) and [npm](https://www.npmjs.com/) (Node Package Manager). The backend is written in ES2015 so [Babel](https://babeljs.io/) is needed to transpile it.

#### Technologies

- [Es6+ Javascript](https://www.ecma-international.org/ecma-262/9.0/index.html)

- [Node/Express](https://nodejs.org/en/)

- [NPM](npmjs.com)

- [PostgreSQL](https://www.postgresql.org/)

- [Swagger:](https://swagger.io/)

## Installation
* Clone or download this repository
* Install dependencies
* Start the server

```bash
git clone https://github.com/Wokoro/moch-shop-api.git
npm install
npm start
```

### Contributors

##### PO

- [zicli-synergy](https://github.com/zicli-synergy)

##### Team Members

- [Wokoro Douye Samuel](https://github.com/Wokoro)


## Usage
Moch Shop API is hosted on Heroku [here](https://moch-shop.herokuapp.com/api/v1/docs/). Click on the link to access Moch Shop API docs easily.

To use the API, make requests to the endpoints supported by Moch Shop and get your responses as JSON objects ready to use in the frontend.

## Features
### Required Features

1. User can Sign Up.

2. User can Sign in.

3. Admin can add a Product.

4. Admin can delete a Product.

5. Admin can edit a Product.

6. Users/Admin can see all products.

7. Users can add product to a Cart.

8. A user can see product in his/her cart.

9. User can delete a product from his/her cart.

## Endpoints


| Request Type | Function                                                                                      | Access Level                               | Enpoint                     |
| ------------ | --------------------------------------------------------------------------------------------- | ------------------------------------------ | --------------------------- |
| POST         | Endpoint for user signup                                                                                      | User                                       | /api/v1/signup                                 |                    |
| POST         | Endpoint for user signin                                                                                      | User                                       | /api/v1/signin                                |                    |
| POST         | Endpoint for product creation by admin                                                                                 | Admin                                      | /api/v1/product                                      |                    |
| GET          | Endpoint for view all available products on the platform                                                                                | User/ Admin                                       | /api/v1/products                              |                    |
| PUT          | Endpoint for updating specific product detials by admin                                                                               | Admin                                       | /api/v1/products/:product_id                              |                    |
| DELETE          | Endpoint for deleting specific product detail                                                                              | Admin                                       | /api/v1/products/:product_id                              |                    |
## Tests

```Bash
npm test
```
#### Admin user details

email: johndoe@yahoo.com

password: required

## License
Moch Shop is available under the MIT license. Visit [LICENSE](https://github.com/Wokoro/moch-shop-api/blob/master/LICENSE.md) for more details.
