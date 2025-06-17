-- CREATE DATABASE restapitest123;
USE restapitest123;
-- DROP TABLE Usuarios;
CREATE TABLE `Usuarios` 
(
  `id`              INT(11) NOT NULL auto_increment ,/* como es auto incrementar no lo entrega */
  `nombre`          VARCHAR(45) NOT NULL ,
  `email`           VARCHAR(45) NOT NULL ,
  `contraseña`      VARCHAR(45) NOT NULL ,
  `rol`             VARCHAR(45) NOT NULL ,
  `fecha_creacion`  timestamp NOT NULL,
  PRIMARY KEY (`id`)
);

/* para que la fecha se guarde solo */
ALTER TABLE Usuarios
MODIFY fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP;

INSERT INTO Usuarios(id,nombre,email,contraseña,rol,fecha_creacion) 
VALUES 
(1,'Rogelio Mariano','ROgeli@exam.com',1234,'empleado'),
(2,'Cesar Tobar','Censala@exam.com',1234,'cliente');


SELECT * FROM Usuarios;
DELETE FROM Usuarios WHERE id;
