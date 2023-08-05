import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import productsRoutes from "./routes/products.js";
import unitsRoutes from "./routes/units.js";
import customersRoutes from "./routes/customers.js";
import oldPriceRoutes from "./routes/oldPrice.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import multer from "multer";
import dotenv from 'dotenv';
dotenv.config()

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/units", unitsRoutes);
app.use("/api/customers", customersRoutes);
app.use("/api/old_price", oldPriceRoutes);

app.listen(process.env.PORT, () => {
  console.log("MyApp connected, running on port", process.env.PORT);
});

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "../client/public/upload");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + file.originalname);
//   },
// });

// const upload = multer({ storage });

// app.post("/api/upload", upload.single("file"), function (req, res) {
//   const file = req.file;
//   res.status(200).json(file.filename);
// });

