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
(2,'Angel Torres','Angelita@exam.com',12345,'empleado',2024/10/03),
(3,'Javier Santiago','Javior@exam.com',123456,'empleado',2024/10/03),
(4,'Toviedo Cantreras','Toriyama@exam.com',1234567,'empleado',2024/10/03),
(5,'Cesar Tobar','Censala@exam.com',1234,'cliente',2024/10/03),
(6,'Pedro Pereira','Pedrope@exam.com',1234,'cliente',2024/10/03),
(7,'Migel Santander','Santan@exam.xom',1234,'cliente',2024/10/03),
(8,'Adrea Cornelia','corneli@exam.com',1234,'cliente',2024/10/03);

SELECT * FROM Usuarios;
DELETE FROM Usuarios WHERE id;