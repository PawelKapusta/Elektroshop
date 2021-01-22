import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routers/userRouter";
import productRouter from "./routers/productRouter";
import "./routers/orderRouter";
import cors from "cors";
import orderRouter from "./routers/orderRouter";
import path from "path";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
  "mongodb+srv://Admin:admin@cluster0.5ad7r.mongodb.net/<dbname>?retryWrites=true&w=majority" ||
    "mongodb://localhost/elektroshop",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});

// import express from "express";
// import bodyParser from "body-parser";
// import cors from "cors";
// import mysql from "mysql";
//
// const app = express();
// app.use(cors());
//
// var connection = mysql.createConnection({
//   //properties
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "pawel",
// });
//
// connection.connect(function (error) {
//   if (!!error) {
//     console.log("Database connection error");
//   } else {
//     console.log("Database connected");
//   }
// });
// app.get("/getAllProducts/:id", (request, response) => {
//   //Pobieranie danych dostępnych w bazie
//   const productId = request.params.id;
//   connection.query(
//     `SELECT * FROM products WHERE id = ${productId};`,
//     function (error, rows, fields) {
//       if (!!error) {
//         console.log("Error in the query");
//       } else {
//         console.log("Database read");
//         response.send(rows);
//         console.log(rows);
//       }
//     }
//   );
// });
// app.get("/getAllProducts", (request, response) => {
//   //Pobieranie danych dostępnych w bazie
//   connection.query(
//     "SELECT * FROM products ORDER BY id;",
//     function (error, rows, fields) {
//       if (!!error) {
//         console.log("Error in the query");
//       } else {
//         console.log("Database read");
//         response.send(rows);
//         console.log(rows);
//       }
//     }
//   );
// });
//
// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// const port = process.env.PORT || 3001;
// app.get("/", (req, res) => {
//   res.send("Hello");
// });
//
// app.listen(port, () => {
//   console.log("Running on port 3001");
// });
