const headerSticky = () => {
    const 
        header = document.querySelector('header'),
        bodyRect = document.body.getBoundingClientRect()
    ;
    if (bodyRect.top < 0) {
        header.classList.add('sticky')
    }
    window.addEventListener('scroll', () => {
        header.classList.toggle('sticky', window.scrollY > 0)
    })
}

export default headerSticky;