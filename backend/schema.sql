-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema zara
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema zara
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `zara` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`cart` (
  `id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

USE `zara` ;

-- -----------------------------------------------------
-- Table `zara`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zara`.`product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `clothesName` VARCHAR(45) NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  `price` INT NOT NULL,
  `category` VARCHAR(45) NOT NULL,
  `panier_user_id` INT NOT NULL,
  `cart_id` INT NOT NULL,
  PRIMARY KEY (`id`, `panier_user_id`, `cart_id`),
  INDEX `fk_product_cart1_idx` (`cart_id` ASC) VISIBLE,
  CONSTRAINT `fk_product_cart1`
    FOREIGN KEY (`cart_id`)
    REFERENCES `mydb`.`cart` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `zara`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zara`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(225) NOT NULL,
  `isAdmin` TINYINT NOT NULL DEFAULT '0',
  `cart_id` INT NOT NULL,
  PRIMARY KEY (`id`, `cart_id`),
  INDEX `fk_user_cart_idx` (`cart_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_cart`
    FOREIGN KEY (`cart_id`)
    REFERENCES `mydb`.`cart` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

USE `mydb` ;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
