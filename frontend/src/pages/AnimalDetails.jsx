
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { animals } from "../animals";

export default function AnimalDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const animal = animals.find((item) => item.id === Number(id));

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: ""
  });

  if (!animal) {
    return <h2>Eläintä ei löytynyt.</h2>;
  }

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const application = {
      ...form,
      animalId: animal.id,
      animalName: animal.name
    };

    sessionStorage.setItem(
      "adoptionApplication",
      JSON.stringify(application)
    );

    navigate("/thank-you");
  }

  return (
    <main className="detail-page">

      {/* PINK SOAP BUBBLES */}
      <div className="detail-bubble detail-bubble-one"></div>
      <div className="detail-bubble detail-bubble-two"></div>
      <div className="detail-bubble detail-bubble-three"></div>
      <div className="detail-bubble detail-bubble-four"></div>
      <div className="detail-bubble detail-bubble-five"></div>
      <div className="detail-bubble detail-bubble-six"></div>

      <button
        className="back-button"
        onClick={() => navigate("/")}
      >
        ← Takaisin eläimiin
      </button>

      <div className="detail-content">
        <img src={animal.image} alt={animal.name} />

        <div className="detail-info">
          <span className="animal-type">{animal.type}</span>
          <h1>{animal.name}</h1>

          <p><strong>Ikä:</strong> {animal.age} vuotta</p>
          <p><strong>Rotu:</strong> {animal.breed}</p>
          <p><strong>Kuvaus:</strong> {animal.description}</p>

          <h2>Hae adoptiota</h2>

          <form onSubmit={handleSubmit}>
            <input
              name="name"
              placeholder="Koko nimi"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Sähköpostiosoite"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              name="phone"
              type="tel"
              placeholder="Puhelinnumero"
              value={form.phone}
              onChange={handleChange}
              required
            />

            <input
              name="address"
              placeholder="Asuinpaikka"
              value={form.address}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Kerro miksi haluat adoptoida eläimen..."
              value={form.message}
              onChange={handleChange}
              required
            />

            <button type="submit">
              Adoptoi minut ❤️
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
