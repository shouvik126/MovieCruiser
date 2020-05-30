show databases;
CREATE SCHEMA IF NOT EXISTS `movie` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
use book;
CREATE TABLE IF NOT EXISTS `movie`.`movie_details` (
  `movie_id` INT NOT NULL AUTO_INCREMENT,
  `movie_title` VARCHAR(100) NULL,
  `movie_box_office` FLOAT(19,2) NULL,
  `movie_active` boolean NULL,
  `movie_date_of_launch` DATE NULL,
  `movie_genre` VARCHAR(45) NULL,
  `movie_has_teaser` boolean NULL,
   `movie_image` VARCHAR(300) NULL,
  PRIMARY KEY (`movie_id`))
ENGINE = InnoDB;
CREATE TABLE IF NOT EXISTS `movie`.`user` (
  `us_id` INT NOT NULL AUTO_INCREMENT,
  `us_uaer_name` VARCHAR(60) NULL,
  `us_first_name` VARCHAR(60) NULL,
  `us_last_name` VARCHAR(60) NULL,
  `us_password` VARCHAR(60) NULL,
  PRIMARY KEY (`us_id`))
ENGINE = InnoDB;
CREATE TABLE IF NOT EXISTS `movie`.`role` (
  `ro_id` INT NOT NULL AUTO_INCREMENT,
  `ro_name` VARCHAR(60) NULL,
  PRIMARY KEY (`ro_id`))
ENGINE = InnoDB;
show tables;
CREATE TABLE IF NOT EXISTS `movie`.`user_role` (
  `ur_id` INT NOT NULL AUTO_INCREMENT,
  `ur_us_id` INT NULL,
  `ur_ro_id` INT NULL,
  PRIMARY KEY (`ur_id`),
  INDEX `ur_us_fk_idx` (`ur_us_id` ASC),
  INDEX `ur_ro_fk_idx` (`ur_ro_id` ASC),
  CONSTRAINT `ur_us_fk`
    FOREIGN KEY (`ur_us_id`)
    REFERENCES `movie`.`user` (`us_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `ur_ro_fk`
    FOREIGN KEY (`ur_ro_id`)
    REFERENCES `movie`.`role` (`ro_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
CREATE TABLE IF NOT EXISTS `movie`.`favorite` (
  `ft_id` INT NOT NULL AUTO_INCREMENT,
  `ft_us_id` INT NULL,
  `ft_mo_id` INT NULL,
  PRIMARY KEY (`ft_id`),
  INDEX `ft_us_fk_idx` (`ft_us_id` ASC),
  INDEX `ft_mo_fk_idx` (`ft_mo_id` ASC),
  CONSTRAINT `ft_us_fk`
    FOREIGN KEY (`ft_us_id`)
    REFERENCES `movie`.`user` (`us_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `ft_mo_fk`
    FOREIGN KEY (`ft_mo_id`)
    REFERENCES `movie`.`movie_details` (`movie_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
insert into movie.movie_details values(1,'Avengers',1518.00,'1','2017-03-15','Superhero','1','https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg');
insert into movie.movie_details values(2,'Titanic',2194.00,'1','2017-12-23','Romance','1','https://upload.wikimedia.org/wikipedia/en/1/19/Titanic_%28Official_Film_Poster%29.png');
insert into movie.movie_details values(3,'Jurassic World',1671.00,0,'2017-08-21','Sci-fi','0','https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Jurassic_World_poster.jpg/220px-Jurassic_World_poster.jpg');
insert into movie.movie_details values(4,'The Lion King',1656.00,'1','2017-02-07','Animation','1','https://upload.wikimedia.org/wikipedia/en/9/9d/Disney_The_Lion_King_2019.jpg');
insert into movie.movie_details values(5,'Avengers: Endgame',2797.00,'1','2022-02-11','Superhero','1','https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg');
 insert into role values(1,'Admin');
 select * from book_details;
insert into role values(2,'Customer');
select * from role;

select * from user;

select * from user_role;

select * from cart;
