import express from "express";
import {
  addCustomer,
  getCustomers,
  deleteCustomer,
  getCustomerById,
  updateCustomer,
} from "../controllers/customer.js";

const router = express.Router();

// all route api products
router.get("/", getCustomers);
router.get("/:id", getCustomerById);
router.post("/", addCustomer);
router.delete("/:id", deleteCustomer);
router.put("/:id", updateCustomer);

export default router;
