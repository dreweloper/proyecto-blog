const fetching = require('node-fetch');

/**
 * @function
 * @async
 * @param {String} url Recibe la url de la API
 * @param {String} [method] Recibe el método HTTP
 * @param {Object} [body = {}] Recibe el objeto req.body
 * @returns {Promise} Objeto del cuerpo del JSON de la respuesta
 * @throws Mensaje de error
 */

const fetchingData = async (url, method, body = {}) => {

    /**
     * Opciones
     * @typedef {Object} options Opciones del fetch()
     * @property {String} [method] Método HTTP
     * @property {String} [body] Método JSON.stringify() sobre el parámetro body
     * @property {Object} [headers] Objeto con la propiedad 'Content-Type' y valor 'application/json'
     */

    let options = {};

    // condicionales

    if(method == 'POST' || method == 'PUT'){

        /**
         * @const {Object} data Recoge el objeto del parámetro body
         */

        const data = { ...body };

        /**
         * @type {options}
         */

        options = {
            method,
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        };
    };

    if(method == 'DELETE'){

        /**
         * @type {options}
         */

        options = { method }
    };

    // fetch

    try {

        console.log('FETCH URL:', url);
        
        const request = await fetch(url, options);

        const response = await request.json();

        if(response.ok){

            return{
                ok: true,
                response
            };

        };

    } catch (error) {

        console.log(`FETCH ERROR: ${error}`);
        
    };

}; //!FUNC-FETCH


module.exports = fetchingData;