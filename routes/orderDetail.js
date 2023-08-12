import express from "express";
import {
    getOrders,
    getOrderById,
    addOrder
} from "../controllers/order.js";

const router = express.Router();

// all route api products
router.get("/", getOrders);
router.get("/:id", getOrderById);
router.post("/", addOrder);
export default router;
