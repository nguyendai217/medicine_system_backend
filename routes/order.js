import express from "express";
import {
    getOrders,
    getOrderById,
} from "../controllers/order.js";

const router = express.Router();

// all route api products
router.get("/", getOrders);
router.get("/:id", getOrderById);

export default router;
