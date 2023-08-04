//import { query } from "express";
import { db } from "../db.js";

export const getProducts = (req, res) => {
    const qr = "SELECT p.id, p.product_code, p.product_name, p.description, u.unit_name FROM products p JOIN units u ON p.unit_id = u.id";

    db.query(qr, (err, data) => {
        if (err) return res.status(500).send(err);
        return res.status(200).json(data);
    });
};

export const getProductById = (req, res) => {
    const q = "SELECT p.id, p.product_code, p.product_name, p.description, u.unit_name FROM products p"
        + " JOIN units u ON p.unit_id = u.id AND p.id = ?";

    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(data[0]);
    });
};

export const getProductByProductCode = (req, res) => {
    const q = "SELECT p.id, p.product_code, p.product_name, p.description, u.unit_name FROM products p"
        + " JOIN units u ON p.unit_id = u.id AND p.product_code = ?";

    console.log('product_code', req.params.productCode);
    db.query(q, [req.params.productCode], (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(data[0]);
    });
};

export const addProduct = (req, res) => {
    const q =
        "INSERT INTO products(`product_code`, `product_name`, `description`, `unit_id`, `created_date`) VALUES (?)";

    const values = [
        req.body.product_code,
        req.body.product_name,
        req.body.description,
        req.body.unit_id,
        new Date()
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(201).json("Thêm mới sản phẩm thành công.");
    });
};

export const deleteProduct = (req, res) => {
    const productId = req.params.id;
    const q = "DELETE FROM products p WHERE p.id = ? ";

    db.query(q, [productId], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Xoá sản phẩm thành công.");
    });
};

export const updateProduct = (req, res) => {
    const productId = req.params.id;
    const q =
        "UPDATE products SET `product_code`=?, `product_name`=?, `description`=?, `unit_id`=?,`updated_date`=? WHERE `id` = ? ";

    const values = [
        req.body.product_code,
        req.body.product_name,
        req.body.description,
        req.body.unit_id,
        new Date()
    ];

    db.query(q, [...values, productId], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Cập nhật sản phẩm thành công.");
    });

};
