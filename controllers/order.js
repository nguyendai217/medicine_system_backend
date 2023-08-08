//import { query } from "express";
import { db } from "../db.js";

export const getOrders = (req, res) => {
    const qr = "SELECT * FROM order";
    db.query(qr, (err, data) => {
        if (err) return res.status(500).send(err);
        return res.status(200).json(data);
    });
};

export const getOrderById = (req, res) => {
    const q = "SELECT * FROM order WHERE `id` = ? ";

    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data[0]);
    });
};

