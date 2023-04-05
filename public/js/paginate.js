document.addEventListener('DOMContentLoaded', () => {


    //*** VARIABLES ***//

    const divPagination = document.querySelector('#paginate');
    let page = 1;



    //*** EVENTOS ***//

    document.addEventListener('click', ({target}) => {

        if(target.matches('#btn-prev')){
            page -= 1
            fetchingData(page);
        };

        if(target.matches('#btn-next')){
            page += 1
            fetchingData(page);
        };

    }); //!EV-CLICK



    //*** FUNCIONES ***//

    const fetchingData = async (page = 1) => {

        const url = `http://localhost:3000/api/?page=${page}`;

        try {

            const request = await fetch(url);

            const { ok, entries } = await request.json();

            console.log(entries);

            const { prevPage, nextPage } = entries;

            if(ok){

                return btnsPagination(prevPage, page, nextPage);

            } else {

                throw error;
            };
            
        } catch (error) {

            console.log(error);

        };

    }; //!FUNC-FETCHINGDATA


    const btnsPagination = (prevPage, page, nextPage) => {

        divPagination.innerHTML = '';

        if(prevPage != null){
            const btnPrev = document.createElement('BUTTON');
            btnPrev.id = 'btn-prev';
            btnPrev.dataset['page'] = page -1;
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


    const init = async () => {

        await fetchingData();

    }; //!FUNC-INIT


    init();


}); //!LOAD