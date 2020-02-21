/**
 * @author - Wokoro Douye Samuel
 */

// Swagger definition
const swaggerDefinition = {
  info: {
    title: 'Mock Shop',
    version: '1.0.0',
    description: 'REST API Documentation for Mock Shop',
  },
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      scheme: 'bearer',
      name: 'authorization',
      in: 'header'
    }
  }
};

// options for the swagger docs
const options = {
  swaggerDefinition,
  apis: ['./docs/**/*.yaml']
};

export default options;
