CREATE DATABASE `amazon`;

USE `producto`;

CREATE TABLE `producto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(40) NOT NULL,
  `precio` int NOT NULL,
  `categoria` varchar(40) NOT NULL,
  `pais_venta` varchar(40) NOT NULL,
  PRIMARY KEY (`id`)
); 

INSERT INTO `producto` (`id`, `nombre`, `precio`, `categoria`, `pais_venta`)
VALUES
	(1,'Remera hombre roja',10,'Indumentaria','Colombia'),
	(2,'Iphone 6, 16GB',500,'Tecnología','Estados Unidos'),
	(3,'Florero de vidrio',20,'Hogar','Argentina'),
	(4,'Cuaderno 500 hojas',14,'Escolar','Colombia'),
	(5,'Lapiceras de colores x12',20,'Escolar','Ecuador'),
	(6,'Smart TV Sony',300,'Tecnología','Argentina'),
	(7,'Almohadon violeta',21,'Hogar','Estados Unidos'),
	(8,'Pantalon de jean mujer',34,'Indumentaria','Argentina'),
	(9,'Mouse inalámbrico',15,'Tecnología','Colombia'),
	(10,'Campera de jean',42,'Indumentaria','Estados Unidos'),
	(11,'Sofa negro',430,'Hogar','Ecuador'),
	(12,'Mesa + 6 sillas',235,'Hogar','Colombia');


 

