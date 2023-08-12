//import { query } from "express";
import { db } from "../db.js";

export const getOrderDetails = (req, res) => {
    const qr = "SELECT * FROM order_details WHERE id = ?";
    db.query(qr, [req.params.id], (err, data) => {
        if (err) return res.status(500).send(err);
        return res.status(200).json(data);
    });
};

export const addOrderDetails = (req, res) => {
    const q =
        "INSERT INTO medicine.order_details(order_id, product_id, quantity, input_price, buy_price, note) VALUES (?)";


    const values = [
        new Date(),
        req.body.customer_id,
        req.body.total_price,
        req.body.note,
        req.body.total_product,
        req.body.profit,
        1,
        req.body.phone_customer
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(201).json("Success");
    });
};
