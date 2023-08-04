//import { query } from "express";
import { db } from "../db.js";

// API get all Customers
export const getCustomers = (req, res) => {
    const qr = "SELECT * FROM customers";

    db.query(qr, (err, data) => {
        if (err) return res.status(500).send(err);
        return res.status(200).json(data);
    });
};

// API get customer by customer_id
export const getCustomerById = (req, res) => {
    const q = "SELECT * FROM customers WHERE id = ?";

    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data[0]);
    });
};

export const addCustomer = (req, res) => {
    const q =
        "INSERT INTO customers(`name`, `address`, `phone_number`, `note`, `created_date`) VALUES (?)";

    const values = [
        req.body.name,
        req.body.address,
        req.body.phone_number,
        req.body.note,
        new Date()
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(201).json("Thêm mới khách hàng thành công.");
    });
};

export const deleteCustomer = (req, res) => {
    const customerId = req.params.id;
    const q = "DELETE FROM customers WHERE id = ?";

    db.query(q, [customerId], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Xoá thông tin khách hàng thành công.");
    });
};

export const updateCustomer = (req, res) => {
    const customerId = req.params.id;
    const q =
        "UPDATE customers SET `name`=?, `address`=?, `phone_number`=?, `note`=?, `updated_date`=? WHERE `id` = ? ";

    const values = [
        req.body.name,
        req.body.address,
        req.body.phone_number,
        req.body.note,
        new Date()
    ];

    db.query(q, [...values, customerId], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Cập nhật thông tin khách hàng thành công.");
    });
};
