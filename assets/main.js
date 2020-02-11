gsap.from(
    ".main-text", {
        duration:2, 
        y:500, 
        opacity: 0,
        delay: 3,
        ease:"slow"});
gsap.from(
    ".sup-text", {
        duration:3, 
        y:400, 
        delay: 4,
        ease:"slow"});
gsap.from(
    ".why-link", {
        duration:2, 
        x: -400, 
        // delay: 4,
        ease:"slow"});