const pool = require("../config/db");

// GET /animals
exports.getAnimals = async (req, res, next) => {
  try {
    const result = await pool.query(
      "SELECT * FROM animals ORDER BY id ASC"
    );

    res.status(200).json(result.rows);
  } catch (error) {
    next(error);
  }
};

// GET /animals/:id
exports.getAnimalById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "SELECT * FROM animals WHERE id = $1",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Eläintä ei löytynyt."
      });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};
