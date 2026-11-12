async function forwardAdoption(animalId, application) {
  const adoptionServerUrl =
    process.env.ADOPTION_SERVER_URL || "http://localhost:3002";

  const response = await fetch(
    `${adoptionServerUrl}/adoptions`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        animalId: Number(animalId),
        applicantName: application.applicantName,
        email: application.email,
        phone: application.phone,
        address: application.address,
        message: application.message
      })
    }
  );

  const data = await response.json();

  if (!response.ok) {
    const error = new Error(
      data.message || "Adoptiohakemuksen käsittely epäonnistui."
    );

    error.status = response.status;
    throw error;
  }

  return data;
}

module.exports = { forwardAdoption };
