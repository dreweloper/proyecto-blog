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




}); //LOAD