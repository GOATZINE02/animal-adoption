import { Link } from "react-router-dom";
import { animals } from "../animals";

export default function Home() {
  return (
    <main>
      <section className="hero">
  <div className="bubble bubble-one"></div>
  <div className="bubble bubble-two"></div>
  <div className="bubble bubble-three"></div>
  <div className="bubble bubble-four"></div>
  <div className="bubble bubble-five"></div>

  <div className="hero-content">
          <span>VAASAN ELÄINSUOJA RY</span>
          <h1>Löydä uusi paras ystäväsi</h1>
          <p>
            Jokainen eläin ansaitsee rakastavan kodin.
            Tutustu adoptiota odottaviin eläimiimme.
          </p>
          <a href="#animals" className="hero-button">
            Katso adoptoitavat eläimet →
          </a>
        </div>
      </section>

      <section id="animals" className="animals">
   <div className="bubble bubble-one"></div>
  <div className="bubble bubble-two"></div>
  <div className="bubble bubble-three"></div>
  <div className="bubble bubble-four"></div>
  <div className="bubble bubble-five"></div>
  <div className="bubble bubble-six"></div>
  <div className="bubble bubble-seven"></div>
  <div className="bubble bubble-eight"></div>
  <div className="bubble bubble-nine"></div>
  <div className="bubble bubble-ten"></div>
  <div className="bubble bubble-eleven"></div>
  <div className="bubble bubble-twelve"></div>

  
        <h2>Adoptiota odottavat eläimet</h2>
        <p>Etsitkö uutta perheenjäsentä? Tutustu eläimiimme ja löydä itsellesi sopiva ystävä!</p>

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
