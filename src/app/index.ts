import express from 'express';
import { productRoutes } from './modules/products/product.route';
import { brandRoutes } from './modules/brands/brands.route';


const router = express.Router();

const moduleRoutes = [
    {
        path: '/products',
        route: productRoutes
    },
    {
        path: '/brands',
        route: brandRoutes
    },
    
];

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router;