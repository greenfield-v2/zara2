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

insert into product (clothesName,image,price,category) values (" jeans","https://static.zara.net/photos///2023/V/0/2/p/5862/416/436/2/w/184/5862416436_15_1_1.jpg?ts=1683652080174",149,"men");
insert into product (clothesName,image,price,category) values ("jeans","https://static.zara.net/photos///2023/V/0/2/p/5575/425/407/2/w/184/5575425407_15_1_1.jpg?ts=1673947028079",150,"men");
insert into product (clothesName,image,price,category) values ("jeans","https://static.zara.net/photos///2023/V/0/2/p/3991/412/251/2/w/184/3991412251_15_1_1.jpg?ts=1673863706150",180,"men");
insert into product (clothesName,image,price,category) values ("jeans","https://static.zara.net/photos///2023/V/0/2/p/6688/444/800/2/w/184/6688444800_15_2_1.jpg?ts=1681311791820",120,"men");
insert into product (clothesName,image,price,category) values (" shoes","https://static.zara.net/photos///2023/V/1/1/p/2201/120/001/2/w/203/2201120001_15_3_1.jpg?ts=1681827938981",249,"men");
insert into product (clothesName,image,price,category) values ("shoes","https://static.zara.net/photos///2023/V/1/2/p/2610/120/800/2/w/203/2610120800_6_1_1.jpg?ts=1675934591970",150,"men");
insert into product (clothesName,image,price,category) values ("shoes","https://static.zara.net/photos///2023/V/1/2/p/2400/121/105/2/w/203/2400121105_6_1_1.jpg?ts=1673611819002",180,"men");
insert into product (clothesName,image,price,category) values ("shoes","https://static.zara.net/photos///2023/V/1/2/p/2602/120/800/2/w/203/2602120800_6_1_1.jpg?ts=1674055362858",520,"men");
insert into product (clothesName,image,price,category) values ("hodies","https://static.zara.net/photos///2023/V/0/2/p/3443/300/430/2/w/424/3443300430_2_5_1.jpg?ts=1672320135135",149,"men");
insert into product (clothesName,image,price,category) values ("hodies","https://static.zara.net/photos///2023/V/0/1/p/0761/300/803/22/w/424/0761300803_2_5_1.jpg?ts=1675795990067",102,"men");
insert into product (clothesName,image,price,category) values ("hodies","https://static.zara.net/photos///2023/V/0/2/p/0761/438/826/2/w/203/0761438826_6_1_1.jpg?ts=1673857372920",114,"men");
insert into product (clothesName,image,price,category) values ("hodies","https://static.zara.net/photos///2022/I/0/2/p/6462/350/251/2/w/205/6462350251_6_1_1.jpg?ts=1661768455407",120,"men");


-- insert into product (clothesName,image,price,category) values ("rob","https://scontent.ftun14-1.fna.fbcdn.net/v/t1.15752-9/348359086_1007729627274553_8864037278793754990_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=_M85XQ8bqCUAX_at2ty&_nc_ht=scontent.ftun14-1.fna&oh=03_AdQhcH8GBxl37MKH5F-1bbWkBVUu-IwO6O7ydg5jQDCddA&oe=648E0CDE",249,"Kidz");
-- insert into product (clothesName,image,price,category) values ("rob","https://scontent.ftun14-1.fna.fbcdn.net/v/t1.15752-9/348359121_717095996857887_3109362915759878624_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=26F4_OMR6iwAX-ifkRT&_nc_ht=scontent.ftun14-1.fna&oh=03_AdSwyZgoSKgZOVvbyMaVkZIxmQ9txnMXBH4IRb3Xz9QLSg&oe=648E1FDB",150,"kidz");
-- insert into product (clothesName,image,price,category) values ("rob","https://scontent.ftun14-1.fna.fbcdn.net/v/t39.30808-6/338909036_1282068065709428_8893823699579995906_n.jpg?stp=c16.0.203.203a_dst-jpg_p235x165&_nc_cat=104&ccb=1-7&_nc_sid=da31f3&_nc_ohc=Ayw5m5KhNfUAX_Nahyq&_nc_ht=scontent.ftun14-1.fna&oh=00_AfDuyeDrpVqmcnd4UTr6fFpXXAG57Vu-U0kgAMaHrj_EyA&oe=646C7271",180,"kidz");


insert into product (clothesName,image,price,category) values ("rob","https://static.zara.net/photos///2023/I/0/1/p/6462/606/406/102/w/430/6462606406_15_1_1.jpg?ts=1683023255518",249,"Kidz");
insert into product (clothesName,image,price,category) values ("rob","https://static.zara.net/photos///2023/V/0/3/p/1422/502/620/106/w/384/1422502620_1_1_1.jpg?ts=1681291385594",150,"kidz");
insert into product (clothesName,image,price,category) values ("rob","https://static.zara.net/photos///2023/V/0/3/p/1193/037/303/105/w/563/1193037303_1_1_1.jpg?ts=1681204492707",280,"kidz");
insert into product (clothesName,image,price,category) values ("jeans","https://static.zara.net/photos///2023/V/0/3/p/4302/616/400/104/w/430/4302616400_1_1_1.jpg?ts=1678447106393",120,"kidz");
insert into product (clothesName,image,price,category) values ("tchirt","https://static.zara.net/photos///2023/V/0/3/p/9000/648/712/2/w/318/9000648712_6_1_1.jpg?ts=1683702621532",99,"kidz");
insert into product (clothesName,image,price,category) values ("tchirt","https://static.zara.net/photos///2023/V/0/3/p/6050/608/712/2/w/280/6050608712_6_1_1.jpg?ts=1678107493604",122,"kidz");
insert into product (clothesName,image,price,category) values ("jeans","https://static.zara.net/photos///2023/V/0/3/p/7227/601/406/104/w/563/7227601406_1_1_1.jpg?ts=1682667238375",156,"kidz");
insert into product (clothesName,image,price,category) values ("shoes","https://static.zara.net/photos///2023/V/1/3/p/2634/130/050/3/w/271/2634130050_1_1_1.jpg?ts=1681909750887",235,"kidz");
insert into product (clothesName,image,price,category) values ("shoes","https://static.zara.net/photos///2023/V/1/3/p/4614/130/800/2/w/271/4614130800_6_1_1.jpg?ts=1677147964711",400,"kidz");
insert into product (clothesName,image,price,category) values ("shoes","https://static.zara.net/photos///2023/V/1/3/p/2657/130/091/3/w/271/2657130091_1_1_1.jpg?ts=1680683667677",162,"kidz");
insert into product (clothesName,image,price,category) values ("shoes","https://static.zara.net/photos///2023/V/1/3/p/2517/130/002/5/w/271/2517130002_1_1_1.jpg?ts=1671720884066",162,"kidz");
insert into product (clothesName,image,price,category) values ("underwear","https://static.zara.net/photos///2023/V/0/3/p/8501/615/712/2/w/280/8501615712_6_1_1.jpg?ts=1675410795038",156,"kidz");


