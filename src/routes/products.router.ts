import { Router } from 'express';
import { createProducts, updateProduct } from '../controllers/products.controller';
import { schemaValidation } from '../middlewares/schemaValidator.middleware';
import { CreateProductSchema, UpdateProductSchema } from '../schemas/product.schema';
const router = Router();
router.post('/products', schemaValidation(CreateProductSchema), createProducts);
router.put('/products/:id', schemaValidation(UpdateProductSchema), updateProduct);
export default router;
