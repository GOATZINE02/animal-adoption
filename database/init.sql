-- =====================================
-- VAASAN ELÄINSUOJA
-- PostgreSQL database initialization
-- =====================================

-- Eläinten taulu
CREATE TABLE IF NOT EXISTS animals (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(50) NOT NULL,
    age INTEGER NOT NULL,
    breed VARCHAR(100),
    description TEXT,
    image_url TEXT,
    status VARCHAR(20) NOT NULL DEFAULT 'available'
        CHECK (status IN ('available', 'adopted'))
);

-- Adoptiohakemusten taulu
CREATE TABLE IF NOT EXISTS adoptions (
    id SERIAL PRIMARY KEY,
    animal_id INTEGER NOT NULL UNIQUE
        REFERENCES animals(id),
    applicant_name VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL,
    phone VARCHAR(30) NOT NULL,
    address VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Esimerkkieläimet
INSERT INTO animals
(name, type, age, breed, description, image_url, status)
VALUES
(
    'Bella',
    'Koira',
    2,
    'Labradorinnoutaja',
    'Ystävällinen ja iloinen koira, joka rakastaa ulkoilua.',
    'https://images.unsplash.com/photo-1552053831-71594a27632d?w=800',
    'available'
),
(
    'Misu',
    'Kissa',
    1,
    'Kotimainen lyhytkarva',
    'Rauhallinen ja lempeä kissa, joka nauttii silityksistä.',
    'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=800',
    'available'
),
(
    'Max',
    'Koira',
    4,
    'Kultainennoutaja',
    'Energinen ja seurallinen koira, joka rakastaa ulkoilua.',
    'https://images.unsplash.com/photo-1552053831-71594a27632d?w=800',
    'available'
);