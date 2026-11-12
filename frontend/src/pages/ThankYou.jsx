import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ThankYou() {
  const [application, setApplication] = useState(null);

  useEffect(() => {
    const saved = sessionStorage.getItem("adoptionApplication");

    if (saved) {
      setApplication(JSON.parse(saved));
    }
  }, []);

  return (
    <main className="thankyou-page">
      <div className="success-icon">✓</div>

      <h1>Kiitos hakemuksestasi!</h1>

      <p>
        Adoptiohakemuksesi on vastaanotettu.
        Olemme sinuun yhteydessä mahdollisimman pian.
      </p>

      {application && (
        <div className="application-summary">
          <h3>Hakemuksen tiedot</h3>
          <p>Hakija: {application.name}</p>
          <p>Eläin: {application.animalName}</p>
          <p>Sähköposti: {application.email}</p>
        </div>
      )}

      <Link to="/" className="hero-button">
        Takaisin etusivulle
      </Link>
    </main>
  );
}
