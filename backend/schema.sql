-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema ZARA
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ZARA
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ZARA` DEFAULT CHARACTER SET utf8 ;
USE `ZARA` ;

-- -----------------------------------------------------
-- Table `ZARA`.`cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ZARA`.`cart` (
  `id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ZARA`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ZARA`.`user` (
  `iduser` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `isAdmin` TINYINT NOT NULL,
  `cart_id` INT NOT NULL,
  PRIMARY KEY (`iduser`, `cart_id`),
  INDEX `fk_user_cart_idx` (`cart_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_cart`
    FOREIGN KEY (`cart_id`)
    REFERENCES `ZARA`.`cart` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ZARA`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ZARA`.`product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `clothesName` VARCHAR(45) NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  `category` VARCHAR(45) NOT NULL,
  `cart_id` INT NOT NULL,
  PRIMARY KEY (`id`, `cart_id`),
  INDEX `fk_product_cart1_idx` (`cart_id` ASC) VISIBLE,
  CONSTRAINT `fk_product_cart1`
    FOREIGN KEY (`cart_id`)
    REFERENCES `ZARA`.`cart` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE )
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
