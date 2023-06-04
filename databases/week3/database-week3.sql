-- Project Meal 
DROP DATABASE IF EXISTS `meal_database`;

CREATE DATABASE IF NOT EXISTS `meal_database`;

USE meal_database;

-- DDL for meal_database
CREATE TABLE `meal_database`.`meal`
(
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `description` text NOT NULL,
  `location` varchar(255) NOT NULL,
  `when` datetime NOT NULL,
  `max_reservations` int(10) NOT NULL,
  `price` DECIMAL NOT NULL,
  `created_date` date NOT NULL,
   PRIMARY KEY(`id`)
)ENGINE
=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



CREATE TABLE `meal_database`.`reservation`
(
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `number_of_guests` int(10)  NOT NULL,
  `phone` varchar(255) NOT NULL,
  `name` varchar(255)  NOT NULL,
  `email` varchar(255)  NOT NULL,
  `meal_id` int(10)  NOT NULL,
  `created_date` date NOT NULL,
   PRIMARY KEY(`id`),
    CONSTRAINT `fk_reservation_meal_id` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE
)ENGINE
=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `meal_database`.`review`
(
  `id` int(1l0) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `description` text NOT NULL,
  `stars` int(10) NOT NULL,
  `meal_id` int(10)  NOT NULL,
  `created_date` date NOT NULL,
   PRIMARY KEY(`id`),
    CONSTRAINT `fk_review_meal_id` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE
)ENGINE
=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
