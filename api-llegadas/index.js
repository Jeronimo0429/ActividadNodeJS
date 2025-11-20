//Declaro las constantes de las librerias. 

const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

//Establezco la conexión a MySQL por mi servicio local de USBWebServer
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "usbw",
    database: "colegio"
});


//Metodo GET: Obtener todas las llegadas y las ordeno de forma DESC por fecha y hora
app.get("/llegadas", (req, res) => {
    const sql = "SELECT * FROM llegadas ORDER BY fecha DESC, hora DESC";

    db.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json(result);
    });
});

// Metodo GET por ID: Recupero una llegada por ID
app.get("/llegadas/:id", (req, res) => {
    const sql = "SELECT * FROM llegadas WHERE id = ?";
    const id = req.params.id;

    db.query(sql, [id], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json(result[0]);
    });
});

// Metodo POST: Registrar llegada en la tabla 
app.post("/llegadas", (req, res) => {
    const {
        nombre,
        identificacion,
        edad,
        grado,
        acudiente,
        numero_acudiente,
        fecha,
        hora,
        excusa
    } = req.body;

    const sql = `
        INSERT INTO llegadas 
        (nombre, identificacion, edad, grado, acudiente, numero_acudiente, fecha, hora, excusa)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            nombre, identificacion, edad, grado, acudiente,
            numero_acudiente, fecha, hora, excusa
        ],
        (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ message: "Registro creado", id: result.insertId });
        }
    );
});

// Metodo PUT: Actualizar una llegada en la tabla
app.put("/llegadas/:id", (req, res) => {
    const id = req.params.id;
    const {
        nombre,
        identificacion,
        edad,
        grado,
        acudiente,
        numero_acudiente,
        fecha,
        hora,
        excusa
    } = req.body;

    const sql = `
        UPDATE llegadas SET 
        nombre = ?, identificacion = ?, edad = ?, grado = ?, acudiente = ?, 
        numero_acudiente = ?, fecha = ?, hora = ?, excusa = ?
        WHERE id = ?
    `;

    db.query(
        sql,
        [
            nombre, identificacion, edad, grado, acudiente,
            numero_acudiente, fecha, hora, excusa, id
        ],
        (err) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ message: "Registro actualizado" });
        }
    );
});

// Metodo DELETE: Eliminar registro
app.delete("/llegadas/:id", (req, res) => {
    const id = req.params.id;

    const sql = "DELETE FROM llegadas WHERE id = ?";
    db.query(sql, [id], (err) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: "Registro eliminado" });
    });
});

// Este metodo inicializa el servidor y lo pone a correr por el puerto 3000 
// que fue el que especifique
app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
