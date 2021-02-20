-- Your SQL goes here
CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL
);

INSERT INTO users(id, name) VALUES (1, 'Insa-Admin');
