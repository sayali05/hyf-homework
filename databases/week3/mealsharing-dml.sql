-- DML 

-- Get all meals
SELECT * FROM meal;

-- Add a new meal
INSERT INTO meal (title, description, location, `when`, max_reservations, price, created_date) 
VALUES('Dosa','Dosa is a popular South Indian thin crepe made with fermented rice and lentil batter.','India','2023-06-30 18:30:00','10',100,NOW()),
('Pizza','Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven.','Italy','2023-06-30 18:30:00','25',100,NOW()),
('Burger','A hamburger, or simply burger, is a food consisting of fillings—usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll.','Germany','2023-06-20 18:30:00','15',300,NOW());

-- Get a meal with any id, fx 1
SELECT * FROM meal WHERE id=1;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal SET title='Paneer Dosa' WHERE id=1;

-- Delete a meal with any id, fx 1
DELETE FROM meal WHERE id=1;

-- Reservation
-- Get all reservations
SELECT * FROM reservation;

-- Add a new reservation
INSERT INTO reservation (number_of_guests, phone, `name`, `email`, meal_id, created_date) 
VALUES(10,23153625,'John','john@gmail.com',1,NOW()),
(15,85746544,'Kedar','kedar@gmail.com',2,NOW()),
(13,27354733,'Rishi','rishi@gmail.com',3,NOW());

-- Get a reservation with any id, fx 1
SELECT * FROM reservation WHERE id=1;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation SET `name`='Kedarsinh' WHERE id=2;

-- Delete a reservation with any id, fx 1
DELETE FROM reservation WHERE id=3;


-- Review
-- Get all reviews
SELECT * FROM review;

-- Add a new review
INSERT INTO review (title, description, `stars`, meal_id, created_date) 
VALUES('Great Food','Yummy food',4,1,NOW()),
('Good restaurant','Best food with best service',5,2,NOW());

-- Get a review with any id, fx 1
SELECT * FROM review WHERE id=1;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review SET `title`='Tasty Food' WHERE id=2;

-- Delete a review with any id, fx 1
DELETE FROM review WHERE id=2;

-- Additional queries
 -- Get meals that has a price smaller than a specific price fx 90
SELECT * FROM meal WHERE price < 200;

-- Get meals that still has available reservations
SELECT * FROM meal m INNER JOIN reservation r ON m.id=r.meal_id WHERE r.created_date > NOW();

-- Get meals that has been created between two dates
SELECT * FROM meal WHERE created_date between created_date AND NOW();

-- Get only specific number of meals fx return only 5 meals
SELECT * FROM meal LIMIT 3;

-- Get the meals that have good reviews
SELECT * FROM meal m INNER JOIN review r ON m.id = r.meal_id WHERE r.stars > 3;

-- Get reservations for a specific meal sorted by created_date
SELECT m.title FROM meal m INNER JOIN reservation r ON m.id=r.meal_id WHERE m.title LIKE "%Dosa%" ORDER BY r.created_date ASC;