import express from "express";
import mongoose from "mongoose";
import dotnev from "dotenv";
import data from "./data.js";
import userRouter from "./routers/userRouter";
import productRouter from "./routers/productRouter";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/elektroshop", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.get("/api/products/:id", (req, res) => {
  const product = data.products.find((x) => x.id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});
app.use("/api/users", userRouter);
// app.use("/api/products", productRouter);
app.get("/api/products", (req, res) => {
  res.send(data.products);
});

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
