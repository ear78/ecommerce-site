-- CREATE TABLES SCHEMA FOR SERVER //////////////////////////

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




-- CREATE VALUES SCHEMA FOR SERVER ///////////////////////////
-- //////////////////////////////////////////////////////////
insert into email(email)
values
    ('test1@test.com')



-- JACKET DATA json

insert into jackets('{
    "id": "fjallraven-greenland-no-1-down-jacket",
    "logo": "/img/logos/Fjallravenlogo2015a.jpg",
    "imageUrl": "/img/jackets/uncblunvBig.jpg",
    "imageThumb": ["./img/jackets/uncblunv.jpg", "./img/jackets/blagreSmall.jpg"],
    "name": "Fjallraven Greenland No. 1 Down Jacket",
    "price": "499.95",
    "descTitle": "Stylish Protection.",
    "description": "The Fjallraven Men's Greenland No. 1 Down Jacket has that traditional outdoorsy style we all crave, as well as the protective features you need to actually stay comfy out there. The Greenland owes its heritage-driven style to Fjallraven's G-1000 wax coating that provides reliable protection against water, wind, and abrasion. Fjallraven also sells G-1000 wax bars for reapplication, so you can touch up the elbows, shoulders, and other parts of the jacket as necessary throughout the life of the garment. Fjallraven stuffed the Greenland with super soft 700-fill down insulation, and the superlight Pertex Quantum lining makes sure you don't feel a feather poking your skin. Made out of recycled polyester and organic cotton, the Greenland is an eco-friendly choice for year-round use.",
    "listDescription": [
        "G-1000 Eco shell", "700-fill down insulation", "Pertex Quantum lining", "Regular fit", "Zippered closure with buttoned placket", "Buttoned chest pockets"
    ],
    "techSpecs": {
            "material": "[shell] G-1000 Eco (65% recycled polyester, 35% organic cotton), G-1000 wax coating, [lining] Pertex Quantum",
            "insulation": "550-fill down",
            "fit": "regular",
            "hood": "no",
            "pockets": "2 buttoned chest, 2 buttoned hand",
            "length": "100",
            "recommendedUse": "casual",
            "manufacturersWarranty": "1 year warranty"
    },
    "reviews":[
        {
            "stars": 5,
            "body": "I love this jacket!  It keeps me toasty in the winter time",
            "author": "ear78@aol.com"
        },
        {
            "stars": 4,
            "body": "I adore this jacket!  It keeps me warm in the winter time",
            "author": "johnny78@aol.com"
        }
    ]

    }'
);
