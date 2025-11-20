'use strict';
const tbody = document.querySelector('#tbl-productos tbody');

let mostrar_datos = async() => {
    let productos = await listar_productos();
    tbody.innerHTML = '';

    for (let i = 0; i < productos.length; i++) {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = productos[i]['id'];
        fila.insertCell().innerHTML = productos[i]['log'];
        fila.insertCell().innerHTML = productos[i]['fecha'];
    }


};

mostrar_datos();