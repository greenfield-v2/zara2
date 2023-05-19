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

insert into product (id,clothesName,image,price,category) values (1,"POPLIN MIDI DRESS","https://static.zara.net/photos///2023/V/0/1/p/6119/040/305/2/w/583/6119040305_1_1_1.jpg?ts=1684233938325",200,"women");
insert into product (id,clothesName,image,price,category) values (1,"PRINTED MIDI DRESS","https://static.zara.net/photos///2023/I/0/1/p/7612/022/400/2/w/583/7612022400_1_1_1.jpg?ts=1684139440268",180,"women");
insert into product (id,clothesName,image,price,category) values (1,"EMBROIDERED MIDI DRESS","https://static.zara.net/photos///2023/V/0/1/p/2895/994/251/2/w/750/2895994251_1_1_1.jpg?ts=1680510371284",190,"women");
insert into product (id,clothesName,image,price,category) values (1,"BAGGY PAPERBAG JEANS","https://static.zara.net/photos///2023/V/0/1/p/5862/022/427/18/w/750/5862022427_1_1_1.jpg?ts=1681915972354",100,"women");
insert into product (id,clothesName,image,price,category) values (1,"EXTRA-LONG TRF JEANS","https://static.zara.net/photos///2023/V/0/1/p/6045/025/400/18/w/583/6045025400_1_1_1.jpg?ts=1682524673428",120,"women");
insert into product (id,clothesName,image,price,category) values (1,"HIGH-WAIST JEANS","https://static.zara.net/photos///2023/V/0/1/p/2177/001/800/2/w/457/2177001800_1_1_1.jpg?ts=1683724891381",120,"women");

insert into product (id,clothesName,image,price,category) values (1,"EYEBROW GEL","https://static.zara.net/photos///2023/V/2/1/p/4130/220/970/2/w/750/4130220970_6_1_1.jpg?ts=1671194321439",50,"beauty");
insert into product (id,clothesName,image,price,category) values (1,"UNIVERSAL LIP GLOSS","https://static.zara.net/photos///2022/I/2/1/p/4130/344/163/2/w/453/4130344163_6_1_1.jpg?ts=1662557946376",120,"beauty");
insert into product (id,clothesName,image,price,category) values (1,"CULT SATIN LIP","https://static.zara.net/photos///2021/V/2/1/p/4130/306/122/2/w/750/4130306122_6_1_1.jpg?ts=1619772366760",120,"beauty");
insert into product (id,clothesName,image,price,category) values (1,"JELLY JOY LIP BALM","https://static.zara.net/photos///2023/V/2/1/p/4660/300/653/2/w/750/4660300653_6_1_1.jpg?ts=1674556725169",120,"beauty");
insert into product (id,clothesName,image,price,category) values (1,"NAIL POLISH","https://static.zara.net/photos///2022/I/2/1/p/4400/461/512/2/w/458/4400461512_6_1_1.jpg?ts=1664981582105",120,"beauty");
insert into product (id,clothesName,image,price,category) values (1,"Red NAIL POLISH","https://static.zara.net/photos///2022/I/2/1/p/4400/400/630/2/w/750/4400400630_2_1_1.jpg?ts=1654901541748",120,"beauty");
