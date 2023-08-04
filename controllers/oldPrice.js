//import { query } from "express";
import { db } from "../db.js";

// API get old price by product ID
export const getOldPriceByProductId = (req, res) => {
    const qr = "SELECT * FROM old_price WHERE `product_id` = ? ORDER BY input_date DESC LIMIT 5";

    db.query(qr, [req.params.id], (err, data) => {
        if (err) return res.status(500).send(err);
        return res.status(200).json(data);
    });
};
