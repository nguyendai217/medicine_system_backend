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

export const addOrder = (req, res) => {
    const q =
        "INSERT INTO medicine.order(order_date, customer_id, total_price, note, total_product, profit, status, phone_customer) VALUES (?)";

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
        console.log(data);
        var insertId = data.insertId;
        var result = {};
        result['insertId'] = insertId;
        result['message'] = "Thêm mới thành công.";
        return res.status(201).json(result);
    });
};
