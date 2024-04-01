import express from 'express';
import authRoutes from './routes/auth.routes';
import productRoutes from './routes/products.router';
const app = express();

app.use(express.json());
app.use(authRoutes);
app.use(productRoutes);
app.listen(3000);
console.log('Server on port', 3000);
