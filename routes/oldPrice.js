import express from "express";
import {
    getOldPriceByProductId
} from "../controllers/oldPrice.js";

const router = express.Router();
router.get("/:id", getOldPriceByProductId);

export default router;
