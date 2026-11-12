const express = require("express");
const router = express.Router();

const {
  getAnimals,
  getAnimalById
} = require("../controllers/animalController");

const {
  forwardAdoption
} = require("../services/adoptionService");

// GET /animals
router.get("/", getAnimals);

// GET /animals/:id
router.get("/:id", getAnimalById);

// POST /animals/:id/adopt
router.post("/:id/adopt", async (req, res, next) => {
  try {
    const animalId = Number(req.params.id);

    if (!Number.isInteger(animalId) || animalId < 1) {
      return res.status(400).json({
        message: "Virheellinen eläimen tunniste."
      });
    }

    const {
      applicantName,
      email,
      phone,
      address,
      message
    } = req.body;

    if (!applicantName || !email || !phone || !address || !message) {
      return res.status(400).json({
        message: "Täytä kaikki hakemuksen kentät."
      });
    }

    const result = await forwardAdoption(animalId, {
      applicantName,
      email,
      phone,
      address,
      message
    });

    res.status(201).json(result);

  } catch (error) {
    next(error);
  }
});

module.exports = router;
