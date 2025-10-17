const express = require("express");
const app = express();

app.use(express.json());

// Simple health check
app.get("/health", (req, res) => {
  res.status(200).send("API Healthy");
});

// API endpoint to serve data
app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from backend API!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend API listening on port ${PORT}`);
});
