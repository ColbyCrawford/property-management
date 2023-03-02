const body = document.querySelector('body');
const logo = document.querySelector('.logo');
const bgTransition = document.querySelector('.bg-transition');
const themeToggle = document.querySelector('.theme-toggle');

themeToggle.addEventListener('change', () => {
    const mainNav = document.querySelector('.main-nav');
    if(themeToggle.checked) {
        

        body.classList.remove('light');
        body.classList.add('dark');

        if(mainNav == null) {
            logo.src = '../images/logo--light.svg';
        } else {
            logo.src = '../images/logo--dark.svg';
        }

        bgTransition.src = '../images/bg-transition--dark.svg';

        console.log("dark mode enabled!");
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
        if(mainNav == null) {
            logo.src = '../images/logo--dark.svg';
        } else {
            logo.src = '../images/logo--light.svg';
        }
        bgTransition.src = '../images/bg-transition--light.svg';

        console.log("light mode enabled!");
    }
});