import userRoutes from './user/routes';
import productRoutes from './product/routes';
import cartRoutes from './cart/routes';

export default [...userRoutes, ...productRoutes, ...cartRoutes];
