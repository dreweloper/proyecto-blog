document.addEventListener('DOMContentLoaded', () => {


    //*** VARIABLES ***//

    const divPagination = document.querySelector('#paginate');
    const fragment = document.createDocumentFragment();
    let params = new URLSearchParams(location.search);
    let pag;



    //*** EVENTOS ***//

    document.addEventListener('click', ({target}) => {

        if(target.matches('#btn-prev')){
            pag = target.dataset.page;
            return location.href = `http://localhost:3000/?page=${pag}`;
        };

        if(target.matches('#btn-next')){
            pag = target.dataset.page;
            return location.href = `http://localhost:3000/?page=${pag}`;
        };

    }); //!EV-CLICK



    //*** FUNCIONES ***//

    const fetchingData = async (pag = 1) => {

        const url = `http://localhost:3000/api/entries/?page=${pag}`;

        try {

            const request = await fetch(url);

            const { ok, entries } = await request.json();

            if(ok){

                return entries;

            } else {

                throw error;
            };
            
        } catch (error) {

            console.log(error);

        };

    }; //!FUNC-FETCHINGDATA


    const btnsPagination = async (pag) => {

        const { prevPage, page, nextPage } = await fetchingData(pag);

        divPagination.innerHTML = '';

        if(prevPage != null){
            const btnPrev = document.createElement('BUTTON');
            btnPrev.id = 'btn-prev'; // para capturarlo en el evento
            btnPrev.dataset['page'] = page - 1; // para pasárselo a la url en el evento
            btnPrev.textContent = '<<';
            fragment.append(btnPrev);
        };

        if(page != null){
            const btnPage = document.createElement('BUTTON');
            btnPage.textContent = page;
            fragment.append(btnPage);
        };

        if(nextPage != null){
            const btnNext = document.createElement('BUTTON');
            btnNext.id = 'btn-next';
            btnNext.dataset['page'] = page + 1;
            btnNext.textContent = '>>'
            fragment.append(btnNext);
        };

        divPagination.append(fragment);

    }; //!FUNC-BTNSPAGINATION


    const init = () => {

        pag = params.get('page');

        if(location.search == ''){ // de esta forma solo entra cuando carga el index

            fetchingData();
            return btnsPagination();

        } else {

            fetchingData(pag);
            return btnsPagination(pag);

        };

    }; //!FUNC-INIT


    init();


}); //!LOAD