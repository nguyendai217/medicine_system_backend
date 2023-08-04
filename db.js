import mysql from "mysql"
import dotenv from 'dotenv';
dotenv.config()
export const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  multipleStatements: true
});

db.connect((err) => {
  if (err) {
    console.log("Error occurred", err);
  } else {
    console.log("Connected to MySQL Server");
  }
});