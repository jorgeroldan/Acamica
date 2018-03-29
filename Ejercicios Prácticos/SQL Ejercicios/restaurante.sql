CREATE DATABASE `restaurant`;

USE restaurant;

CREATE TABLE `comentario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(50) DEFAULT NULL,
  `mensaje` varchar(150) DEFAULT NULL,
  `puntuacion` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
); 

INSERT INTO `comentario` (`id`, `usuario`, `mensaje`, `puntuacion`)
VALUES
	(1,'carla_1996','Muy buena atención',9),
	(2,'sabri_na','El mozo tardó mucho en atendernos',6),
	(3,'franco_caballero','Los platos muy abundantes. Muy buena atención',8),
	(4,'ale_levy','Muy caro y de mala calidad',2),
	(5,'martu_rodriguez','El lugar es muy oscuro pero la comida estaba bien',6),
	(6,'giselle_123','Los mejores platos de pasta, muy ricos y abundantes',10),
	(7,'toscano_carla','Excelente, no dejen de probar el pescado',10),
	(8,'nuñez_natalia','Muy mala atención, lo mozos no eran amables',5),
	(9,'belen_baron','Platos pequeños para compartir, muy caro',5),
	(10,'florencia_magali','Excelentes carnes y pescados. Lo recomiendo',8),
	(11,'sol_calvo','Definitivamente voy a volver, excelente comida',7),
	(12,'hernan_guzman','Lugar muy ruidoso y con poca luz',6),
	(13,'gusti_truco','La comida demoró mucho y llego fria',4),
	(14,'maca_vitali','Tuvimos que esperar más de una hora para sentarnos',7),
	(15,'rocio_orozco','Muy buena comida pero un poco caro',8);