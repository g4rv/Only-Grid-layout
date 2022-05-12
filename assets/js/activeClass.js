const actiiveClass = () => {
    const 
        //header elements
        header = document.querySelector('.header'),
        burgerBtn = header.querySelector('.burger'),
        //sub-header nav elements
        headerNav = header.querySelector('.nav'),
        navLinks = headerNav.querySelectorAll('.nav__link'),
        //form elements
        form = document.querySelector('.form'),
        formSwitches = form.querySelectorAll('.form__switch');

    const toggleActiveClass = (obj) => {
        obj.classList.toggle('active');
    }

    formSwitches.forEach(formSwitch => {
        formSwitch.addEventListener('click', () => {
            toggleActiveClass(formSwitch);
        })
    })

    document.addEventListener('load', () => {
        navLinks.forEach(navLink => {
            const navLinkHref = navLink.href;
    
            if(window.location.href.indexOf(navLinkHref) != -1) {
                toggleActiveClass(navLink);
            }
        })
    })


    burgerBtn.addEventListener('click', () => {
        toggleActiveClass(burgerBtn);
        toggleActiveClass(headerNav);
    })
}

export default actiiveClass;