import express, { urlencoded } from "express";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import bodyparser from "body-parser";


import cors from "cors";
import router from "./routes/intruder.js";
import adminRoutes from "./routes/admin.routes.js";
import connectDB from "./config/db.js";

const app = express();

connectDB();

app.use(
  cors({
    origin: "https://intrudersec.in/", // frontend
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"], // ✔ allow DELETE
    allowedHeaders: ["Content-Type", "Authorization", "x-admin-secret"], // ✔ include your custom header
    credentials: true,
  })
);



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use("/api/admin", adminRoutes);
app.use("/api/v1", router);

app.listen(process.env.PORT, () => {
  console.log(`server started at ${process.env.PORT}`);
});
