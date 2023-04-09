document.addEventListener('DOMContentLoaded', () => {

    const navMenu = document.querySelector('.nav-menu');
    const navToggle = document.querySelector('.nav-toggle');

    document.addEventListener('click', ({target}) => {

        if(target.matches('#btn-bars')){
            navMenu.classList.toggle('nav-menu_visible');
        };

        if(navMenu.classList.contains('nav-menu_visible')){ // accesibilidad
            navToggle.setAttribute('aria-label', 'Close menu');
        } else {
            navToggle.setAttribute('aria-label', 'Open menu');
        };

    });

}); //!LOAD