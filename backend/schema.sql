-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema zara
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema zara
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `zara` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `zara` ;

-- -----------------------------------------------------
-- Table `zara`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zara`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(225) NOT NULL,
  `isAdmin` TINYINT NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `zara`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zara`.`product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `clothesName` VARCHAR(45) NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  `price` INT NOT NULL,
  `category` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `zara`.`cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zara`.`cart` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_cart_user_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_cart_product1_idx` (`product_id` ASC) VISIBLE,
  CONSTRAINT `fk_cart_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `zara`.`user` (`id`),
  CONSTRAINT `fk_cart_product1`
    FOREIGN KEY (`product_id`)
    REFERENCES `zara`.`product` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


