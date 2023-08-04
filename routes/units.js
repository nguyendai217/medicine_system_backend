import express from "express";
import {
    getUnits,
    getUnitById,
} from "../controllers/units.js";

const router = express.Router();

// all route api products
router.get("/", getUnits);
router.get("/:id", getUnitById);

export default router;
