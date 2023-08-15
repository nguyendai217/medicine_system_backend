import { db } from "../db.js";

// API get old price by product ID
export const getOldPriceByProductId = (req, res) => {
    const qr = "SELECT * FROM old_price WHERE `product_id` = ? ORDER BY input_date DESC LIMIT 5";

    db.query(qr, [req.params.id], (err, data) => {
        if (err) return res.status(500).send(err);
        return res.status(200).json(data);
    });
};

export const getOldPriceByProductCode = (req, res) => {
    const qr = "SELECT o.price, o.input_date FROM old_price o JOIN products p ON p.id = o.product_id AND p.product_code = ? ";

    db.query(qr, [req.params.code], (err, data) => {
        if (err) return res.status(500).send(err);
        return res.status(200).json(data);
    });
};

export const addOldPrice = (req, res) => {
    const qr = "INSERT INTO medicine.old_price(product_id, price, input_date) values (?) ";
    const values = [
        req.body.product_id,
        req.body.price,
        new Date()
    ];
    db.query(qr, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(201).json("Thêm mới thành công.");
    });
};
