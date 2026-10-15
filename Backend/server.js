import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./config/db.js";
import productRoutes from "./routes/product.js"
import path from "path";


const __dirname = path.resolve();
dotenv.config();
const app = express();
app.use(express.json());
const PORT= process.env.PORT || 5000 ;
app.use("/api/products", productRoutes);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/Frontend/dist")));
  app.get("/{*splat}", (req, res) => {
  res.sendFile(path.resolve(__dirname, "Frontend", "dist", "index.html"));
});
}

app.listen(PORT, () => {  
  connectDB(); // Call the connectDB function to connect to MongoDB
  console.log("Server is running on port 5000");
});
