document.addEventListener('DOMContentLoaded', () => {


    //*** VARIABLES ***//

    const divPagination = document.querySelector('#paginate');
    const fragment = document.createDocumentFragment();
    let params = new URLSearchParams(location.search);
    let pag, search;



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

        if(target.matches('#btn-search')){
            pag = 1;
            search = params.get('search');
            return location.href = `http://localhost:3000/api/?search=${search}&page=${pag}`;
        };

    }); //!EV-CLICK



    //*** FUNCIONES ***//

    const fetchingData = async (pag = 1, search) => {

        let url;

        if(!params.has('search')){

            console.log('ENTRO EN EL PRIMER IF DEL FETCH')

            url = `http://localhost:3000/api/?page=${pag}`;

        } else {

            console.log('ENTRO EN EL SEGUNDO IF DEL FETCH')

            search = params.get('search');
            pag = params.get('page');
            console.log('PAG FETCH', pag)

            url = `http://localhost:3000/api/?search=${search}&page=${pag}`;

        };

        try {

            console.log('URL:', url);

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

        if(params.has('search') && params.has('page')){

            console.log('ENTRO EN EL PRIMER IF DEL INIT');

            pag = params.get('page');

            fetchingData(pag);
            return btnsPagination(pag);

        };

        if(location.search == '' || params.has('search')){ // de esta forma solo entra cuando carga el index

            console.log('ENTRO EN EL SEGUNDO IF DEL INIT');

            fetchingData();
            return btnsPagination();

        } else {

            console.log('ENTRO EN EL ELSE DEL INIT');

            pag = params.get('page');

            fetchingData(pag);
            return btnsPagination(pag);

        };

    }; //!FUNC-INIT


    init();


}); //!LOAD