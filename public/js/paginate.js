document.addEventListener('DOMContentLoaded', () => {

    //*** VARIABLES ***//
    const div = document.querySelector('#paginate');
    // const prevBtn = document.querySelector('#btn-prev');
    // const nextBtn = document.querySelector('#btn-next');



    //*** EVENTOS ***//
    document.addEventListener('click', ({target}) => {

        if(target.matches('#btn-prev')){
            console.log('Botón prev')
        };

        if(target.matches('#btn-next')){
            console.log('Botón next')
        };

    }); //!EV-CLICK



    //*** FUNCIONES ***//

    const fetchingData = async (page = 1, limit = 3) => {

        const url = `http://localhost:3000/api/?page=${page}&limit=${limit}`

        try {

            const request = await fetch(url);

            const { ok, entries } = await request.json();

            if(ok){
                console.log(entries);
                return entries;

            } else {

                throw error;
            };
            
        } catch (error) {

            console.log(error);

        };

    }; //!FUNC-FETCHINGDATA

    fetchingData();

}); //!LOAD