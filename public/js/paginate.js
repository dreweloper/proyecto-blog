document.addEventListener('DOMContentLoaded', () => {


    //*** VARIABLES ***//

    const divPagination = document.querySelector('#paginate');



    //*** EVENTOS ***//

    document.addEventListener('click', ({target}) => {

        if(target.matches('#btn-prev')){
            let page = target.dataset.page;
            fetchingData(page);
            return location.href = `http://localhost:3000/?page=${page}`; //? return
        };

        if(target.matches('#btn-next')){
            let page = target.dataset.page;
            fetchingData(page);
            return location.href = `http://localhost:3000/?page=${page}`; //? return
        };

    }); //!EV-CLICK



    //*** FUNCIONES ***//

    const fetchingData = async (page = 1) => {

        const url = `http://localhost:3000/api/?page=${page}`;

        try {

            const request = await fetch(url);

            const { ok, entries } = await request.json();

            const { prevPage, page, nextPage } = entries;

            if(ok){

                return btnsPagination(prevPage, page, nextPage);

            } else {

                throw error;
            };
            
        } catch (error) {

            console.log(error);

        };

    }; //!FUNC-FETCHINGDATA


    const btnsPagination = async (prevPage, page, nextPage) => {

        divPagination.innerHTML = '';

        if(prevPage != null){
            const btnPrev = document.createElement('BUTTON');
            btnPrev.id = 'btn-prev';
            btnPrev.dataset['page'] = page - 1;
            btnPrev.textContent = '<<';
            divPagination.append(btnPrev);
        };

        const btnPage = document.createElement('BUTTON');
        btnPage.textContent = page;
        divPagination.append(btnPage);

        if(nextPage != null){
            const btnNext = document.createElement('BUTTON');
            btnNext.id = 'btn-next';
            btnNext.dataset['page'] = page + 1;
            btnNext.textContent = '>>'
            divPagination.append(btnNext);
        };

    }; //!FUNC-BTNSPAGINATION


    const init = () => {

        if(location.search == ''){ // de esta forma solo entra cuando carga el index

            return btnsPagination(null, 1, !null); // con el 'return' ya no entra en el 'if' al hacer click en el botón 'next'

        } else {

            let params = new URLSearchParams(location.search);
            let page = params.get('page');
            
            return fetchingData(page);

        };

    }; //!FUNC-INIT


    init();


}); //!LOAD