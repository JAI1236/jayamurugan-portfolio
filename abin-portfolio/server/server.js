const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const projectRoutes = require("./routes/projectRoutes");

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/projects", projectRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Abin Portfolio API is running 🚀"
  });
});

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Server running on http://127.0.0.1:${PORT}`);
});