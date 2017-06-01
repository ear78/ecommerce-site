CREATE TABLE email(
    id serial PRIMARY KEY,
    email VARCHAR(355) UNIQUE NOT NULL
)

CREATE TABLE products(
    id serial PRIMARY KEY,
    name VARCHAR(40) NOT NULL,
    description VARCHAR(300) NOT NULL,
    type VARCHAR(40)
)

CREATE TABLE airplanes(
    planeid SERIAL PRIMARY KEY NOT NULL,
    planetype varchar(40) NOT NULL,
    passengercount integer NOT NULL
);

CREATE TABLE jackets(
    id serial PRIMARY KEY,
    data jsonb
)



insert into email(email)
values
    ('test1@test.com')
