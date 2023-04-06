document.addEventListener('DOMContentLoaded', () => {


    //*** VARIABLES ***//

    const divPagination = document.querySelector('#paginate');
    const fragment = document.createDocumentFragment();
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

        const url = `http://localhost:3000/api/?page=${pag}`;

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

        console.log('BTNS:', prevPage, page, nextPage );

        divPagination.innerHTML = '';

        if(prevPage != null){
            const btnPrev = document.createElement('BUTTON');
            btnPrev.id = 'btn-prev';
            btnPrev.dataset['page'] = page - 1;
            btnPrev.textContent = '<<';
            fragment.append(btnPrev);
        };

        const btnPage = document.createElement('BUTTON');
        btnPage.textContent = page;
        fragment.append(btnPage);

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

        let params = new URLSearchParams(location.search);
        console.log(params);

        if(location.search == ''){ // de esta forma solo entra cuando carga el index

            fetchingData();
            return btnsPagination();

        } else {

            pag = params.get('page');

            fetchingData(pag);
            return btnsPagination(pag);

        };

    }; //!FUNC-INIT


    init();


}); //!LOAD