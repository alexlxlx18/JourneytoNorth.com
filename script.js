document.addEventListener('DOMContentLoaded', () => {
    let searchBtn = document.querySelector('#search-btn');
    let searchBar = document.querySelector('.search-bar-container');
    let formBtn = document.querySelector('#login-btn');
    let loginForm = document.querySelector('.login-form-container');
    let formClose = document.querySelector('#form-close');
    let menu = document.querySelector('#menu-bar');
    let navbar = document.querySelector('.navbar');
    let imgBtn = document.querySelectorAll('.img-btn');
    let imgSlider = document.querySelector('#img-slider');

    window.onscroll = () => {
        searchBar.classList.remove('active');
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
        loginForm.classList.remove('active');
    };

    if (menu) {
        menu.addEventListener('click', () => {
            menu.classList.toggle('fa-times');
            navbar.classList.toggle('active');
        });
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            searchBar.classList.toggle('active');
        });
    }

    if (formBtn) {
        formBtn.addEventListener('click', () => {
            loginForm.classList.add('active');
        });
    }

    if (formClose) {
        formClose.addEventListener('click', () => {
            loginForm.classList.remove('active');
        });
    }

    imgBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            let activeBtn = document.querySelector('.controls .active');
            if (activeBtn) {
                activeBtn.classList.remove('active');
            }
            btn.classList.add('active');
            
            let src = btn.getAttribute('data-src');
            if (imgSlider && src) {
                imgSlider.style.opacity = 0;
                setTimeout(() => {
                    imgSlider.src = src;
                    imgSlider.style.opacity = 1;
                }, 200);
            }
        });
    });
});
