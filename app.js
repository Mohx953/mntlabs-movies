$(document).ready(() => {
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })

    // setting owl carousel

    let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]


    upcomingMovies().then(() => {
        $('#hero-carousel').owlCarousel({
            items: 1,
            dots: false,
            loop: true,
            nav: true,
            navText: navText,
            autoplay: true,
            autoplayHoverPause: true

        })
    })

    trendingSeries().then(() => {
        $('#top-movies-slide').owlCarousel({
            items: 2,
            dots: false,
            loop: true,
            autoplay: true,
            autoplayHoverPause: true,
            responsive: {
                500: {
                    items: 3
                },
                1280: {
                    items: 4
                },
                1600: {
                    items: 6
                }
            }
        })
    })
Promise.all([
    latestCartoons(),
    trendingToday(),
    popularSeries(),
    upcomingMovies3(),
    popularTv(),
    upcomingSeries(),
    upcomingMovies2(),
]).then(() => {
        $('.movies-slide').owlCarousel({
            items: 2,
            dots: false,
            nav: true,
            navText: navText,
            margin: 15,
            responsive: {
                500: { items: 2 },
                1280: { items: 4 },
                1600: { items: 6 }
            }
        })
    })
})


let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    cart.classList.remove('active');
    user.classList.remove('active');
    menu.classList.remove('active');
}
window.onscroll = () => {
    menu.classList.remove('active');
    user.classList.remove('active');
    search.classList.remove('active');
    cart.classList.remove('active');
}
