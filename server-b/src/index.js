require("dotenv").config();

const express = require("express");
const adoptionRoutes = require("./routes/adoptionRoutes");

const app = express();

app.use(express.json());

// Terveystarkistus
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Adoption Server B is running",
    server: "Server B"
  });
});

// Adoptioiden REST API
app.use("/adoptions", adoptionRoutes);

// Virheiden käsittely
app.use((error, req, res, next) => {
  console.error("Server B error:", error);

  res.status(error.status || 500).json({
    message: error.message || "Internal server error"
  });
});

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log("--------------------------------");
  console.log("VAASAN ELÄINSUOJA - SERVER B");
  console.log("--------------------------------");
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Adoption API: http://localhost:${PORT}/adoptions`);
  console.log(`Health check: http://localhost:${PORT}/health`);
});
