CREATE DATABASE `twitter`;

USE `twitter`;

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) DEFAULT NULL,
  `nombre_completo` varchar(40) DEFAULT NULL,
  `cantidad_de_tweets` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
); 

INSERT INTO `usuario` (`id`, `username`, `nombre_completo`, `cantidad_de_tweets`)
VALUES
	(1,'camipucheta','Camila Pucheta',1234),
	(2,'martulopez','Martina Lopez',9862),
	(3,'lukifalter','Lucas Falter',452),
	(4,'pedro1899','Pedro Martinez',1299),
	(5,'natialterio','Natalia Alterio',7622),
	(6,'camibru','Camila Bruno',3401),
	(7,'orne15','Ornela Cerro',4327),
	(8,'macasanchez','Macarena Sanchez',3224);
