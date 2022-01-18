
let elementAboutShouldAnimate = true;

document.addEventListener('scroll', function(e) {

    const elementAbout = document.getElementById('about');
    const scrollBottom = window.scrollY + window.innerHeight;
    const elementAboutCenter = elementAbout.offsetTop + (elementAbout.offsetHeight/2);

    if (scrollBottom > elementAboutCenter && elementAboutShouldAnimate) {
        elementAboutShouldAnimate = false;
        // Do Animation Logic
    };
})

