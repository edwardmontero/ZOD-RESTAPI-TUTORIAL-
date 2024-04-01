import { Request, Response } from 'express';
import {
	CreateProductType,
	UpdateProductBodyType,
	UpdateProductParamsType,
	UpdateProductQueryType,
} from '../schemas/product.schema';

export const createProducts = (
	req: Request<unknown, unknown, CreateProductType>,
	res: Response
) => {
	const { name, price } = req.body;
	res.send('creating product');
};
export const updateProduct = (
	req: Request<UpdateProductParamsType, unknown, UpdateProductBodyType, UpdateProductQueryType>,
	res: Response
) => {
	console.log(req.body, req.params, req.query);
	const { id } = req.params;
	const { name, price } = req.body;
	const { title } = req.query;
	console.log(id, name, title, price);
	res.send('updating product');
};
