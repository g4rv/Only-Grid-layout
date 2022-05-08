const actiiveClass = () => {
    const 
        header = document.querySelector('.header'),
        burgerBtn = header.querySelector('.burger'),
        headerNav = header.querySelector('.nav'),
        navLinks = headerNav.querySelectorAll('.nav__link');

    const toggleActiveClass = (obj) => {
        obj.classList.toggle('active');
    }

    navLinks.forEach(navLink => {
        const navLinkHref = navLink.href;

        if(window.location.href === navLinkHref) {
            toggleActiveClass(navLink);
        }
    })

    burgerBtn.addEventListener('click', () => {
        toggleActiveClass(burgerBtn);
        toggleActiveClass(headerNav);
    })
}

export default actiiveClass;