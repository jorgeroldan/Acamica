CREATE DATABASE aerolinea;

USE aerolinea;

CREATE TABLE `vuelo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `origen` varchar(50) DEFAULT NULL,
  `destino` varchar(30) DEFAULT NULL,
  `duracion` int(11) DEFAULT NULL,
  `precio` decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `vuelo` (`id`, `origen`, `destino`, `duracion`, `precio`)
VALUES
	(1,'Los Ángeles','Cartagena',7,986),
	(2,'Nueva Zelanda','Miami',10,1362),
	(3,'Argentina','Bogotá',8,764),
	(4,'Argentina','España',14,1239),
	(5,'Cartagena','Roma',13,1043),
	(6,'Nueva York','Santiago de Chile',7,853),
	(7,'Lima','Buenos Aires',4,349),
	(8,'Bogotá','Nueva York',15,1256),
	(9,'Lima','Nueva Zelanda',12,743),
	(10,'Nueva York','Washington',3,432);


