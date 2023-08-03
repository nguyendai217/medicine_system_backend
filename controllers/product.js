import { query } from "express";
import { db } from "../db.js";

export const getProducts = (req, res) => {
    const qr = "SELECT * FROM products";

    db.query(qr, (err, data) => {
        if (err) return res.status(500).send(err);
        return res.status(200).json(data);
    });
};

export const getProductById = (req, res) => {
    const q =
        "SELECT p.id, `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`,`date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ? ";

    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(data[0]);
    });
};

export const addProduct = (req, res) => {
    const q =
        "INSERT INTO posts(`title`, `desc`, `img`, `cat`, `date`,`uid`) VALUES (?)";

    const values = [
        req.body.title,
        req.body.desc,
        req.body.img,
        req.body.cat,
        req.body.date,
        userInfo.id,
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(201).json("Product has been created.");
    });
};

export const deleteProduct = (req, res) => {
    const productId = req.params.id;
    const qr = "DELETE FROM products WHERE `id` = ? ";

    db.query(qr, [productId], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Product has been deleted!");
    });
};

export const updateProduct = (req, res) => {
    const productId = req.params.id;
    const q =
        "UPDATE posts SET `title`=?,`desc`=?,`img`=?,`cat`=? WHERE `id` = ? AND `uid` = ?";

    const values = [
        req.body.title,
        req.body.desc,
        req.body.img,
        req.body.cat
    ];

    db.query(q, [...values, productId], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Post has been updated.");
    });

};
