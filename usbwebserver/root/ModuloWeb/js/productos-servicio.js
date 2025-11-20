'use strict';
let listar_productos = async() => {
    let productos;

    await axios({
            method: 'get',
            url: 'http://localhost:8090/WebServices/consultarLogSensor.php',
            responseType: 'json'
        }).then(function(res) {
            productos = res.data;
        })
        .catch(function(err) {
            console.log(err);
        });

    return productos;
};