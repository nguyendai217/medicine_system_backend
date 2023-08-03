import express from "express";
import {
  addProduct,
  getProducts,
  deleteProduct,
  getProductById,
  updateProduct,
} from "../controllers/product.js";

const router = express.Router();

// all route api products
router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", addProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);

export default router;
