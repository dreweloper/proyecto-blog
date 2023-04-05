document.addEventListener('DOMContentLoaded', () => {

    //*** VARIABLES ***//
    const divPagination = document.querySelector('#paginate');
    // const prevBtn = document.querySelector('#btn-prev');
    // const nextBtn = document.querySelector('#btn-next');
    const page = 1;



    //*** EVENTOS ***//
    document.addEventListener('click', ({target}) => {

        if(target.matches('#btn-prev')){

        };

        if(target.matches('#btn-next')){
            console.log('Botón next')
        };

    }); //!EV-CLICK



    //*** FUNCIONES ***//

    const fetchingData = async (page = 1, limit = 3) => { //? pendiente quitar los valores por defecto

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


    const btnsPagination = async (page, prevPage, nextPage) => {

        divPagination.innerHTML = '';

        if(prevPage != null){
            const btnPrev = document.createElement('BUTTON');
            btnPrev.id = 'btn-prev';
            btnPrev.textContent = 'PREV BTN';
            divPagination.append(btnPrev);
        };

        const btnPage = document.createElement('BUTTON');
        btnPage.textContent = page;
        divPagination.append(btnPage);

        if(nextPage != null){
            const btnNext = document.createElement('BUTTON');
            btnNext.id = 'btn-next';
            btnNext.textContent = 'NEXT BTN'
            console.log('Pintar botón next');
        } else {
            divPagination.append(btnNext);
        };

    }; //!FUNC-BTNSPAGINATION


    const init = async () => {

        await fetchingData();

    }; //!FUNC-INIT

    init();

}); //!LOAD