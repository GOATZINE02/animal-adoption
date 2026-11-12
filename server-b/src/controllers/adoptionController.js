const pool = require("../config/db");

exports.createAdoption = async (req, res, next) => {
  const {
    animalId,
    applicantName,
    email,
    phone,
    address,
    message
  } = req.body;

  if (
    !animalId ||
    !applicantName ||
    !email ||
    !phone ||
    !address ||
    !message
  ) {
    return res.status(400).json({
      message: "Kaikki hakemuksen tiedot ovat pakollisia."
    });
  }

  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    // Tarkistetaan eläin ja lukitaan sen tietorivi
    const animalResult = await client.query(
      "SELECT * FROM animals WHERE id = $1 FOR UPDATE",
      [animalId]
    );

    if (animalResult.rows.length === 0) {
      await client.query("ROLLBACK");

      return res.status(404).json({
        message: "Eläintä ei löytynyt."
      });
    }

    if (animalResult.rows[0].status !== "available") {
      await client.query("ROLLBACK");

      return res.status(409).json({
        message: "Eläin on jo adoptoitu."
      });
    }

    // Tallennetaan hakemus
    const adoptionResult = await client.query(
      `INSERT INTO adoptions
      (animal_id, applicant_name, email, phone, address, message)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *`,
      [
        animalId,
        applicantName,
        email,
        phone,
        address,
        message
      ]
    );

    // Päivitetään eläimen status
    await client.query(
      "UPDATE animals SET status = 'adopted' WHERE id = $1",
      [animalId]
    );

    await client.query("COMMIT");

    return res.status(201).json({
      success: true,
      message: "Adoptiohakemus tallennettu onnistuneesti!",
      adoption: adoptionResult.rows[0]
    });

  } catch (error) {
    await client.query("ROLLBACK");
    next(error);

  } finally {
    client.release();
  }
};
