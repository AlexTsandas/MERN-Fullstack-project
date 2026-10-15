import express from "express";
import Product from "../models/ProductModels.js"
import mongoose from "mongoose";
import { getProducts, createProduct , updateProduct , deleteProduct } from "../controllers/productController.js";
const router =express.Router();

router.get("/", getProducts);

router.post("/", createProduct);

router.delete("/:id", deleteProduct);

router.put("/:id", updateProduct);

export default router;
