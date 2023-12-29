import express from "express";
import { CreateNewProduct, DeleteProductByID, DeleteProductByTitle, GetAllProducts, GetProductByID, UpdateProductDiscount, UpdateProductPrice } from "./../Controllers/productController.js";
import { CheckAdmin } from "../Middleware/CheckAdmin.js";
import { CheckToken } from "../Middleware/CheckToken.js";

const router = express.Router()

router.get('/products', GetAllProducts)

router.get('/products/:id', GetProductByID)

router.delete('/products/:id', CheckToken, CheckAdmin, DeleteProductByID)

router.delete('/products', CheckToken, CheckAdmin, DeleteProductByTitle)

router.post('/products', CheckToken, CheckAdmin, CreateNewProduct)

router.put('/products/:id', CheckToken, CheckAdmin, UpdateProductPrice)

router.put('/products/:id', CheckToken, CheckAdmin, UpdateProductDiscount)

export default router