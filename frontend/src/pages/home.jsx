import { Link } from "react-router-dom";
import { animals } from "../animals";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <span>VAASAN ELÄINSUOJA RY</span>
          <h1>Löydä uusi paras ystäväsi ❤️</h1>
          <p>
            Jokainen eläin ansaitsee rakastavan kodin.
            Tutustu adoptiota odottaviin eläimiimme.
          </p>
          <a href="#animals" className="hero-button">
            Tutustu eläimiin →
          </a>
        </div>
      </section>

      <section id="animals" className="animals">
        <h2>Adoptiota odottavat eläimet</h2>
        <p>Tutustu uusiin ystäviimme.</p>

        <div className="animal-grid">
          {animals.map((animal) => (
            <article className="animal-card" key={animal.id}>
              <img src={animal.image} alt={animal.name} />

              <div className="animal-info">
                <span>{animal.type.toUpperCase()}</span>
                <h3>{animal.name}</h3>
                <p>
                  {animal.age} vuotta · {animal.breed}
                </p>

                <Link
                  to={`/animals/${animal.id}`}
                  className="card-button"
                >
                  Katso lisää →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
