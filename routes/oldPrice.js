import express from "express";
import {
    getOldPriceByProductId,
    getOldPriceByProductCode
} from "../controllers/oldPrice.js";

const router = express.Router();
router.get("/:id", getOldPriceByProductId);

router.get("/productCode/:code", getOldPriceByProductCode);

export default router;
