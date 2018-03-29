CREATE TABLE cumpleanhos(
    id INT NOT NULL auto_increment,
    mensaje VARCHAR(20) NOT NULL,
    hora TIME NOT NULL,
    destinatario VARCHAR(20) NOT NULL,
    PRIMARY KEY (id)
);
INSERT INTO cumpleanhos(id,mensaje,hora,destinatario) VALUES (1,'Feliz cumpleaños',15:21:00,'Paula');
INSERT INTO cumpleanhos(id,mensaje,hora,destinatario) VALUES (2,'Bienvenido a Puerto Rico',08:20:00,'Francisco');
INSERT INTO cumpleanhos(id,mensaje,hora,destinatario) VALUES (3,'Buenos días',17:30:00,'Alejandra');
INSERT INTO cumpleanhos(id,mensaje,hora,destinatario) VALUES (4,'¿A qué hora nos encontramos?',14:00:00,'Marcos');

 
 
