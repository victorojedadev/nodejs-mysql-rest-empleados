CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE empleados (
  id INT(11) NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(45) NOT NULL,
  salario int(5) DEFAULT NULL,
  PRIMARY KEY(id)
);

DESCRIBE empleados;

INSERT INTO empleados values (1, 'juan', '8000');
INSERT INTO empleados values (2, 'angel', '8000');
INSERT INTO empleados values (3, 'carlos', '20000');
INSERT INTO empleados values (4, 'vero', '12000');