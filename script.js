let nav=document.querySelector('nav');

window.addEventListener('scroll',()=>{
    nav.classList.toggle('naWinScroll',window,scrollY>0)
})

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
