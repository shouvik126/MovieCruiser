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
insert into movie_details values(1,'Java',99.00,'1','2017-03-15','Programming','1','https://stackify.com/wp-content/uploads/2018/09/Java-Debugging-Tips-1280x720.jpg');
insert into movie_details values(2,'C-Programming',129.00,'0','2017-12-23','Programming','1','https://img-a.udemycdn.com/course/750x422/700012_a499_9.jpg');
insert into movie_details values(3,'Database',149.00,0,'2017-08-21','Database','0','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlAAt6s_AwBKmTJRDOyc_Pc9yfWLzx6T-2FW0CDF89Qy8o_8L6&usqp=CAU');
insert into movie_details values(4,'UI design',99.00,'0','2017-02-07','Designing','1','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSkbtSyP7itNu7sULEcDUKZwLccEvmkwLSQuGqCsg_KgxLjYxo7&usqp=CAU');
insert into movie_details values(5,'C++Programming',32.00,'1','2022-02-11','Programming','1','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqS0KoATr1AL6BpC1k_b96k3MqHfPROfoX00NXCqbggkLntp4D&usqp=CAU');
 insert into role values(1,'Admin');
 select * from book_details;
insert into role values(2,'Customer');
select * from role;

select * from user;

select * from user_role;

select * from cart;
