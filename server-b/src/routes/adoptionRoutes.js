const express = require("express");

const router = express.Router();

const {
  createAdoption
} = require("../controllers/adoptionController");

// POST /adoptions
// Vastaanottaa adoptiohakemuksen Server A:lta
router.post("/", createAdoption);

module.exports = router;