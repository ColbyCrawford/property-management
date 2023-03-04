const body = document.querySelector('body');
const logo = document.querySelector('.logo');
const bgTransition = document.querySelector('.bg-transition');
const themeToggle = document.querySelector('.theme-toggle');
const menuToggle = document.querySelector('.menu-toggle');
const mainNavLinks = document.querySelector('.main-nav__links');
const overlay = document.querySelector('#overlay');

themeToggle.addEventListener('change', () => {
    const mainNav = document.querySelector('.main-nav');
    if(themeToggle.checked) {
        

        body.classList.remove('light');
        body.classList.add('dark');

        if(mainNav == null) {
            logo.src = '/images/logo--light.svg';
        } else {
            logo.src = '/images/logo--dark.svg';
        }

        bgTransition.src = '/images/bg-transition--dark.svg';

        console.log("dark mode enabled!");
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
        if(mainNav == null) {
            logo.src = '/images/logo--dark.svg';
        } else {
            logo.src = '/images/logo--light.svg';
        }
        bgTransition.src = '/images/bg-transition--light.svg';

        console.log("light mode enabled!");
    }
});

menuToggle.addEventListener('click', () => { 
    const icon = document.querySelector('.menu-toggle__icon');
    const mainNav = document.querySelector('.main-nav');
    if (mainNavLinks.hasAttribute('data-visible')) {
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');     
        if (mainNav == null) {
            if (body.classList.contains('light')) {
                icon.classList.remove('text-primary-400');
            } else {
                icon.classList.remove('text-neutral-200');
            }
        } 
    } else {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
        if (mainNav == null) {
            if (body.classList.contains('light')) {
                icon.classList.add('text-primary-400');
            } else {
                icon.classList.add('text-neutral-200');
            }
            
        }
    }
    mainNavLinks.toggleAttribute('data-visible');
    overlay.toggleAttribute('data-visible');
});