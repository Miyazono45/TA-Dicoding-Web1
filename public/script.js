const fbA = document.querySelector('.facebookA')
const twitA = document.querySelector('.twitterA')
const igA = document.querySelector('.instagramA')

const copacopa = document.querySelector('svg')
window.addEventListener('resize', function () {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Set the SVG fill color based on the window width and height.
    if (windowWidth >= 768) {
        copacopa.setAttribute('fill', 'green');
    } else {
        copacopa.setAttribute('fill', 'red');
    }
});


// $(window).resize(function () {
//     let mqTab = window.matchMedia("(min-width: 768px)")
//     if (mqTab.matches) {
//         igA.setAttribute("fill", "#685bf6")
//         twitA.setAttribute("fill", "#685bf6")
//         fbA.setAttribute("fill", "#685bf6")
//     } else {
//         igA.setAttribute("fill", "#685bf6")
//         twitA.setAttribute("fill", "#f0eff1")
//         fbA.setAttribute("fill", "#f0eff1")
//     }
// });



