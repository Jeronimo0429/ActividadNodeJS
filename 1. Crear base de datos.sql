CREATE DATABASE colegio;

USE colegio;

CREATE TABLE llegadas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    identificacion VARCHAR(50) NOT NULL,
    edad INT NOT NULL,
    grado VARCHAR(20) NOT NULL,
    acudiente VARCHAR(100) NOT NULL,
    numero_acudiente VARCHAR(20) NOT NULL,
    fecha DATE NOT NULL,
    hora TIME NOT NULL,
    excusa BOOLEAN NOT NULL DEFAULT 0
);