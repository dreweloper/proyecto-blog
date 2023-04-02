const urlBase = 'http://localhost:3000/api';


const fetchingData = async (url = '', method, body = {}) => {

    let options = {};

    // condicionales

    if(method == 'POST' || method == 'PUT'){
        const data = { ...body };
        options = {
            method,
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        };
    };

    if(method == 'DELETE'){
        options = { method }
    };

    // fetch

    try {
        
        const request = await fetch(`${urlBase}/${url}`, options);

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