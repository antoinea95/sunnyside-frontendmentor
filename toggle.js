const toggleIcon = document.querySelector('.header__toggle');

toggleIcon.addEventListener('click', showNav);

function showNav() {
    const nav = document.querySelector('.header__nav');
    const navActive = document.querySelector('.header__nav--toggle'); 

    if(navActive) {
        nav.classList.remove('header__nav--toggle');
    }

    else {
        nav.classList.add('header__nav--toggle');
        
    }
    
}