CREATE DATABASE `cine`;

USE `cine`;

CREATE TABLE `peliculas` (
  id INT NOT NULL AUTO_INCREMENT,
  titulo varchar(70) NOT NULL,
  duracion INT NOT NULL,
  director varchar(70) NOT NULL,
  PRIMARY KEY (id)
); 