import express from "express";
import {
    getOldPriceByProductId,
    getOldPriceByProductCode,
    addOldPrice
} from "../controllers/oldPrice.js";

const router = express.Router();
router.get("/:id", getOldPriceByProductId);
router.get("/productCode/:code", getOldPriceByProductCode);
router.post("/", addOldPrice);
export default router;
