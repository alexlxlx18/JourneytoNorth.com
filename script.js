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
document.addEventListener("DOMContentLoaded", function () {
    let imgSlider = document.getElementById("img-slider");
    let imgButtons = document.querySelectorAll(".img-btn");
    let images = ["Catarman.png", "Mahinog.png", "Sagay.png", "Mambajao.png"];
    let currentIndex = 0;

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length; // Loop through images
        imgSlider.src = images[currentIndex];

        // Update active class
        imgButtons.forEach(btn => btn.classList.remove("active"));
        imgButtons[currentIndex].classList.add("active");
    }

    setInterval(changeImage, 3000); // Change image every 3 seconds

    // Allow manual switching
    imgButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            currentIndex = index;
            imgSlider.src = images[currentIndex];

            imgButtons.forEach(btn => btn.classList.remove("active"));
            btn.classList.add("active");
        });
    });
});



