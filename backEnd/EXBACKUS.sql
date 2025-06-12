-- CREATE DATABASE restapitest123;
USE restapitest123;
-- DROP TABLE Usuarios;
CREATE TABLE `Usuarios` 
(
  `id`              INT(11) NOT NULL auto_increment ,/* como es auto incrementar no lo entrega */
  `nombre`          VARCHAR(45) NOT NULL ,
  `Email`           VARCHAR(45) NOT NULL ,
  `contraseña`      VARCHAR(45) NOT NULL ,
  `Rol`             VARCHAR(45) NOT NULL ,
  `fecha_creacion`  timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
);


INSERT INTO Usuarios(id,nombre,Email,contraseña,Rol,fecha_creacion) 
VALUES 
(1,'Rogelio Mariano','ROgeli@exam.com',1234,'empleado',2024/10/03),
(2,'Cesar Tobar','Censala@exam.com',1234,'cliente',2024/10/03)


SELECT * FROM Usuarios;
DELETE FROM Usuarios WHERE id;
