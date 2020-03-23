gsap.from(
    ".why-link", {
        duration:2, 
        x: -400, 
        // delay: 4,
        ease:"slow"});
// anumate on scroll
AOS.init();
// animate on scroll

var tl = new TimelineMax();

tl.from(".des-img", 2.0, { y: -42, });
tl.to(".des-img", 1.5, { y: 15, ease:"slow", repeat:-1, yoyo:true });

tl.from(".dev-img", 2.0, { y: -40, });
tl.to(".dev-img", 1.5, { y: 20, ease:"slow", repeat:-1, yoyo:true });

const openNav = e => {
    document.getElementById("myNav").classList.toggle('nav-open');
    document.querySelector('.hamburger').classList.toggle("change");
}

const ham = document.querySelector('.hamburger').addEventListener('click', openNav);