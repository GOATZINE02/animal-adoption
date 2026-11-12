require("dotenv").config();

const express = require("express");
const cors = require("cors");

const animalRoutes = require("./routes/animalRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Palvelimen terveystarkistus
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Animal Server A is running",
    server: "Server A"
  });
});

// Eläinten REST API
app.use("/animals", animalRoutes);

// Tuntematon osoite
app.use((req, res) => {
  res.status(404).json({
    message: "API endpoint not found"
  });
});

// Virheiden käsittely
app.use((error, req, res, next) => {
  console.error("Server A error:", error);

  res.status(error.status || 500).json({
    message: error.message || "Internal server error"
  });
});

// Käynnistetään palvelin
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("--------------------------------");
  console.log("VAASAN ELÄINSUOJA - SERVER A");
  console.log("--------------------------------");
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Animal API: http://localhost:${PORT}/animals`);
  console.log(`Health check: http://localhost:${PORT}/health`);
});
np