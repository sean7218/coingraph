create table users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR (80) NOT NULL UNIQUE CONSTRAINT lower_case_email CHECK (lower(email) = email),
    username VARCHAR (80) NOT NULL UNIQUE
);