import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/home";
import AnimalDetails from "./pages/AnimalDetails";
import ThankYou from "./pages/ThankYou";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/animals/:id"
          element={<AnimalDetails />}
        />

        <Route
          path="/thank-you"
          element={<ThankYou />}
        />
      </Routes>

      <footer id="contact">
        <h3>🐾 Vaasan Eläinsuoja ry</h3>
        <p>Jokainen tassu ansaitsee kodin.</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;