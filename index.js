const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTQ4NjZhYzM5Y2ViOTQ0ODkzNWI0MTBlZmQ0ZGQ1ZCIsIm5iZiI6MTc3NDE4MDgwNC4zMjA5OTk5LCJzdWIiOiI2OWJmZDljNDM0YjEwMzc1NzQxNWU4NDkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.yn-Tk28iCJebKGngMc7F_9I1ASOwIFAx4aInmXfa1ik'
    }
};

fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
// .then(res => res.json())
// .then(res => console.log(res))
// .catch(err => console.error(err));

// fetch('https://api.themoviedb.org/3/movie/latest', options)
//   .then(res => res.json())
//   .then(res => console.log(res))
//   .catch(err => console.error(err));



// fetch('https://api.themoviedb.org/3/movie/upcoming', options)
//   .then(res => res.json())
//   .then(res => console.log(res))
//   .catch(err => console.error(err));upcomingMovies3()
dopestMovie()
latestCartoons()
trendingSeries()
upcomingMovies()
trendingToday()
popularSeries()
dopestSeries()
popularTv()
searchMovie()
searchSeries()
upcomingSeries()
async function trendingToday() {
    try {
        const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
        if (!response.ok) {
            throw new Error('Error')
        }
        else {
            const data = await response.json()

            const trend = document.querySelector('.latest')
            trend.innerHTML = ''

            data.results.forEach(movie => {
                const trendTitle = movie.title
                const trendImage = movie.poster_path
                const vote = movie.vote_average
                const rating = movie.adult
                trend.innerHTML += `
                <!-- MOVIE ITEM -->
                <a href="#" class="movie-item" >
                    <img src="https://image.tmdb.org/t/p/w342${trendImage}" alt="movie">
                    <div class="movie-item-content">
                        <div class="movie-item-title">
                            ${trendTitle}
                        </div>
                        <div class="movie-infos">
                            <div class="movie-info">
                                <i class="bx bxs-star"></i>
                                <span>${vote}</span>
                            </div>
                            
                            <div class="movie-info">
                                <span>HD</span>
                            </div>
                            <div class="movie-info">
                                Adult<span>${rating}</span>
                            </div>
                        </div>
                    </div>
                </a>
                
                `

            })


        }
    } catch (error) {
        console.log(error)
    }
}




async function popularSeries() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTQ4NjZhYzM5Y2ViOTQ0ODkzNWI0MTBlZmQ0ZGQ1ZCIsIm5iZiI6MTc3NDE4MDgwNC4zMjA5OTk5LCJzdWIiOiI2OWJmZDljNDM0YjEwMzc1NzQxNWU4NDkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.yn-Tk28iCJebKGngMc7F_9I1ASOwIFAx4aInmXfa1ik'
        }
    };

    // fetch('https://api.themoviedb.org/3/tv/popular', options)
    //   .then(res => res.json())
    //   .then(res => console.log(res))
    //   .catch(err => console.error(err));
    try {

        const response = await fetch('https://api.themoviedb.org/3/tv/popular', options)

        if (!response.ok) {
            throw new Error('Error')
        }
        else {
            const data = await response.json()

            const container = document.querySelector('.series')
            container.innerHTML = '';

            data.results.forEach(movie => {
                const seriesimg = movie.poster_path
                const seriesname = movie.name
                const rating = movie.vote_average
                const movieRating = movie.adult


                container.innerHTML += `
                <a href="#" class="movie-item">
                    <img src="https://image.tmdb.org/t/p/w500${seriesimg}" alt="series">
                    <div class="movie-item-content">
                        <div class="movie-item-title">
                        ${seriesname}
                        </div>
                        <div class="movie-infos">
                            <div class="movie-info">
                                <i class="bx bxs-star"></i>
                                <span>${rating}</span>
                            </div>
                            
                            <div class="movie-info">
                                <span>HD</span>
                            </div>
                            <div class="movie-info">
                                <span>${movieRating}</span>
                            </div>
                        </div>
                    </div>
                </a>`


            }
            )


        }
    } catch (error) {
        console.log(error)
    }
}

// async function latestMovies() {

//     try {
//         const res =await fetch('https://api.themoviedb.org/3/movie/upcoming', options)
//         if (!res.ok) {
//             throw new Error('Error')
//         }
//         else {
//             const data = await res.json()

//             const container = document.getElementById('autoWidth2')
//             data.results.forEach(movie => {
//                 const upcomingImg = movie.poster_path
//                 const upcomingTitle=movie.title
//                 const overView=movie.overview
//                 const releasedate=movie.release_date

//                 container.innerHTML += `
//             <li class="item-a">
//                 <div class="last-box">
//                     <div class="latest-b-img">
//                         <img src="https://image.tmdb.org/t/p/w500${upcomingImg}" alt="upcoming movie">
//                     </div>
//                     <div class="latest-b-text">
//                         <strong>${upcomingTitle}</strong>
//                         <p>${overView}</p>
//                         <p>${releasedate}</p>
//                     </div>
//                 </div>
//             </li>

//                 `

//             })


//         }

//     } catch (error) {
//         console.log(error)
//     }
// }

async function upcomingMovies() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer '
        }
    };


    try {
        const res = await fetch('https://api.themoviedb.org/3/movie/upcoming', options)
        if (!res.ok) {
            throw new Error('Error')
        }
        else {
            const data = await res.json()

            const container = document.querySelector('.upcoming')

            container.innerHTML = ''





            data.results.forEach(movie => {
                const upcomingImg = movie.backdrop_path
                const upcomingTitle = movie.title
                const overView = movie.overview
                const releasedate = movie.release_date
                container.innerHTML += `
                <div class="hero-slide-item ">
                    <img src="https://image.tmdb.org/t/p/w1280${upcomingImg}" alt="">
                    <div class="overlay"></div>
                    <div class="hero-slide-item-content">
                        <div class="item-content-wraper">
                            <div class="item-content-title top-down">
                                ${upcomingTitle} : ${releasedate}
                            </div>
                            <div class="movie-infos top-down delay-2">
                                <div class="movie-info">
                                    <i class="bx bxs-star"></i>
                                    <span>9.5</span>
                                </div>
                                <div class="movie-info">
                                    <i class="bx bxs-time"></i>
                                    <span></span>
                                </div>
                                <div class="movie-info">
                                    <span>HD</span>
                                </div>
                                <div class="movie-info">
                                    <span>16+</span>
                                </div>
                            </div>
                            <div class="item-content-description top-down delay-4">
                                ${overView}
                            </div>
                           
                        </div>
                    </div>
                    </div>
                
                `
            })

        }
    } catch (error) { console.log(error) }


}
async function upcomingMovies2() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTQ4NjZhYzM5Y2ViOTQ0ODkzNWI0MTBlZmQ0ZGQ1ZCIsIm5iZiI6MTc3NDE4MDgwNC4zMjA5OTk5LCJzdWIiOiI2OWJmZDljNDM0YjEwMzc1NzQxNWU4NDkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.yn-Tk28iCJebKGngMc7F_9I1ASOwIFAx4aInmXfa1ik'
        }
    };

    try {
        const res = await fetch('https://api.themoviedb.org/3/movie/upcoming', options)
        if (!res.ok) {
            throw new Error('Error')
        }
        else {
            const data = await res.json()

            const container = document.querySelector('.series2')

            container.innerHTML = ''

            data.results.forEach(movie => {
                const upcomingImg = movie.poster_path
                const upcomingTitle = movie.title
                const overView = movie.overview
                const releasedate = movie.release_date
                const rating = movie.vote_average
                container.innerHTML += `
                <a href="#" class="movie-item">
                    <img src="https://image.tmdb.org/t/p/w1280${upcomingImg}" alt="">
                    <div class="movie-item-content">
                        <div class="movie-item-title">
                            ${upcomingTitle}
                        </div>
                        <div class="movie-infos">
                            <div class="movie-info">
                                <i class="bx bxs-star"></i>
                                <span>${rating}</span>
                            </div>
                            
                            <div class="movie-info">
                                <span>HD</span>
                            </div>
                            <div class="movie-info">
                                <span>16+</span>
                            </div>
                        </div>
                    </div>
                </a>
                
                `
            })

        }
    } catch (error) { console.log(error) }


}
async function upcomingMovies3() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTQ4NjZhYzM5Y2ViOTQ0ODkzNWI0MTBlZmQ0ZGQ1ZCIsIm5iZiI6MTc3NDE4MDgwNC4zMjA5OTk5LCJzdWIiOiI2OWJmZDljNDM0YjEwMzc1NzQxNWU4NDkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.yn-Tk28iCJebKGngMc7F_9I1ASOwIFAx4aInmXfa1ik'
        }
    };

    try {
        const res = await fetch('https://api.themoviedb.org/3/trending/movie/day', options)
        if (!res.ok) {
            throw new Error('Error')
        }
        else {
            const data = await res.json()

            const container = document.querySelector('.series22')

            container.innerHTML = ''

            data.results.forEach(movie => {
                const upcomingImg = movie.poster_path
                const upcomingTitle = movie.title
                const overView = movie.overview
                const releasedate = movie.release_date
                const rating = movie.vote_average
                container.innerHTML += `
                <a href="#" class="movie-item">
                    <img src="https://image.tmdb.org/t/p/w1280${upcomingImg}" alt="">
                    <div class="movie-item-content">
                        <div class="movie-item-title">
                            ${upcomingTitle}
                        </div>
                        <div class="movie-infos">
                            <div class="movie-info">
                                <i class="bx bxs-star"></i>
                                <span>${rating}</span>
                            </div>
                            
                            <div class="movie-info">
                                <span>HD</span>
                            </div>
                            <div class="movie-info">
                                <span>16+</span>
                            </div>
                        </div>
                    </div>
                </a>
                
                `
            })

        }
    } catch (error) { console.log(error) }


}


async function trendingSeries() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTQ4NjZhYzM5Y2ViOTQ0ODkzNWI0MTBlZmQ0ZGQ1ZCIsIm5iZiI6MTc3NDE4MDgwNC4zMjA5OTk5LCJzdWIiOiI2OWJmZDljNDM0YjEwMzc1NzQxNWU4NDkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.yn-Tk28iCJebKGngMc7F_9I1ASOwIFAx4aInmXfa1ik'
        }
    };

    // fetch('https://api.themoviedb.org/3/tv/airing_today', options)
    //     .then(res => res.json())
    //     .then(res => console.log(res))
    //     .catch(err => console.error(err));

    try {
        const response = await fetch('https://api.themoviedb.org/3/tv/airing_today', options)

        if (!response.ok) {
            throw new Error('Error')
        }
        else {
            const data = await response.json()

            const container = document.querySelector('.topSeries')
            container.innerHTML = ''

            data.results.forEach(movie => {
                const moviename = movie.name
                const releaseDate = movie.first_air_date
                const rating = movie.vote_average
                const image = movie.poster_path
                container.innerHTML += `
             
                <!-- MOVIE ITEM -->
                <div class="movie-item">
                    <img src="https://image.tmdb.org/t/p/w1280${image}" alt="trendingseries">
                    <div class="movie-item-content">
                        <div class="movie-item-title">
                            ${moviename}
                        </div>
                        <div class="movie-item-title">
                            ${releaseDate}
                        </div>
                        <div class="movie-infos">
                            <div class="movie-info">
                                <i class="bx bxs-star"></i>
                                <span>${rating}</span>
                            </div>
                            <div class="movie-info">
                                <span>HD</span>
                            </div>
                            <div class="movie-info">
                                <span>16+</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- END MOVIE ITEM -->
                <!-- MOVIE ITEM -->
                <!-- END MOVIE ITEM -->
           
                    `




            })



        }



    } catch (error) {
        console.log(error)
    }

}


async function latestCartoons() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTQ4NjZhYzM5Y2ViOTQ0ODkzNWI0MTBlZmQ0ZGQ1ZCIsIm5iZiI6MTc3NDE4MDgwNC4zMjA5OTk5LCJzdWIiOiI2OWJmZDljNDM0YjEwMzc1NzQxNWU4NDkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.yn-Tk28iCJebKGngMc7F_9I1ASOwIFAx4aInmXfa1ik'
        }
    };

    // .then(res => res.json())
    // .then(res => console.log(res))
    // .catch(err => console.error(err));

    try {

        const response = await fetch('https://api.themoviedb.org/3/discover/tv?with_genres=16&air_date.gte=2026-01-01&sort_by=popularity.asc', options)

        if (!response.ok) {
            throw new Error('Error')

        }
        else {
            const data = await response.json()
            const cartoonContainer = document.querySelector('.cartoons')
            cartoonContainer.innerHTML = ''

            data.results.forEach(movie => {
                const name = movie.name
                const releaseDate = movie.first_air_date
                const popularity = movie.popularity
                const rating = movie.adult
                const image = movie.poster_path

                cartoonContainer.innerHTML += `
                    <!-- MOVIE ITEM -->
                <a href="#" class="movie-item">
                    <img src="https://image.tmdb.org/t/p/w1280${image}" alt="">
                    <div class="movie-item-content">
                        <div class="movie-item-title">
                            ${name}
                        </div>
                        <div class="movie-item-title">
                            ${releaseDate}
                        </div>
                        <div class="movie-infos">
                            <div class="movie-info">
                                <i class="bx bxs-star"></i>
                                <span>${popularity}</span>
                            </div>
                            
                            <div class="movie-info">
                                <span>HD</span>
                            </div>
                            <div class="movie-info">
                                <span>Adult: ${rating}</span>
                            </div>
                        </div>
                    </div>
                </a>
                    `
            })


        }





    } catch (error) {
        console.log(error)
    }

}

async function dopestMovie() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTQ4NjZhYzM5Y2ViOTQ0ODkzNWI0MTBlZmQ0ZGQ1ZCIsIm5iZiI6MTc3NDE4MDgwNC4zMjA5OTk5LCJzdWIiOiI2OWJmZDljNDM0YjEwMzc1NzQxNWU4NDkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.yn-Tk28iCJebKGngMc7F_9I1ASOwIFAx4aInmXfa1ik'
        }
    };


    try {
        const dope = await fetch('https://api.themoviedb.org/3/search/movie?query=Project Hail Mary ', options)

        if (!dope.ok) {
            throw new Error('Error')
        }
        else {
            const dopest = await dope.json()
            const dopeContainer = document.querySelector('.dopest')
            dopeContainer.innerHTML = ''

            dopest.results.forEach(movie => {
                const backdrop_path = movie.backdrop_path
                const original_title = movie.original_title
                const popularity = movie.popularity
                const adult = movie.adult
                const overview = movie.overview

                dopeContainer.innerHTML = `
                    <img src="https://image.tmdb.org/t/p/w1280${backdrop_path}" alt="">
            <div class="overlay"></div>
            <div class="hero-slide-item-content">
                <div class="item-content-wraper">
                    <div class="item-content-title">
                        ${original_title}
                    </div>
                    <div class="movie-infos">
                        <div class="movie-info">
                            <i class="bx bxs-star"></i>
                            <span>${popularity}</span>
                        </div>
                        
                        <div class="movie-info">
                            <span>HD</span>
                        </div>
                        <div class="movie-info">
                            <span>Adult: ${adult}</span>
                        </div>
                    </div>
                    <div class="item-content-description">
                        ${overview}
                    </div>
                    <div class="item-action">
                        <a href="https://www.rottentomatoes.com/m/project_hail_mary" class="btn btn-hover">
                            <i class="bx bxs-right-arrow"></i>
                            <span>Watch now</span>
                        </a>
                    </div>
                </div>
            </div>
                    
                    `

            })


        }



    } catch (error) {
        console.log(error)
    }



}




async function popularTv() {
    const url = 'https://api.trakt.tv/shows/trending'
    const options = {
        headers: {
            'Content-Type': 'application/json',
            'trakt-api-version': '2',
            'trakt-api-key': '9bfe09ad193e2cf44dcc2ff0e745377033c8a6b08746c63ccb0963c862eb72d5'
        }
    }

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('Error')
        }
        else {
            const result = await response.json();

            const container = document.querySelector('.latestSeries')
            container.innerHTML = ''
            result.forEach(movie => {
                const image = movie.show.images.poster[0]
                const title = movie.show.original_title
                const rate = movie.show.rating
                const runtime = movie.show.runtime
                const episodes = movie.show.aired_episodes
                const rel_date = movie.show.year
                const trailer = movie.show.trailer
                container.innerHTML += `
            <a href="#" class="movie-item"  >
                    <img src="https://${image}" alt="">
                    <div class="movie-item-content">
                        <div class="movie-item-title">
                            ${title}
                        </div>
                        <div class="movie-item-title">
                            ${rel_date}
                        </div>
                        <div class="movie-info">
                            
                            <span>${episodes} Episodes</span>
                        </div>
                        <div class="movie-infos">
                            <div class="movie-info">
                                <i class="bx bxs-star"></i>
                                <span>${rate}</span>
                            </div>
                            <div class="movie-info">
                                <i class="bx bxs-time"></i>
                                <span>${runtime}</span>
                            </div>
                            <div class="movie-info">
                                <span>HD</span>
                            </div>
                            <div class="movie-info">
                                <span>16+</span>
                            </div>
                        </div>
                    </div>
                    
                </a>
                
            
            `

            })

        }



        // console.log(result);
    } catch (error) {
        console.error(error);
    }
}


async function upcomingSeries() {
    const url = 'https://api.trakt.tv/shows/popular'
    const options = {
        headers: {
            'Content-Type': 'application/json',
            'trakt-api-version': '2',
            'trakt-api-key': '9bfe09ad193e2cf44dcc2ff0e745377033c8a6b08746c63ccb0963c862eb72d5'
        }
    }

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('Error')
        }
        else {
            const result = await response.json();

            const container = document.querySelector('.upcomingSeries2')
            container.innerHTML = ''
            result.forEach(movie => {
                const image = movie.images.poster[0]
                const title = movie.title
                const rate = movie.rating
                const runtime = movie.runtime
                const episodes = movie.aired_episodes
                const rel_date = movie.year
                const trailer = movie.trailer
                container.innerHTML += `
            <a href="#" class="movie-item"  >
                    <img src="https://${image}" alt="">
                    <div class="movie-item-content">
                        <div class="movie-item-title">
                            ${title}
                        </div>
                        <div class="movie-item-title">
                            ${rel_date}
                        </div>
                        <div class="movie-info">
                            
                            <span>${episodes} Episodes</span>
                        </div>
                        <div class="movie-infos">
                            <div class="movie-info">
                                <i class="bx bxs-star"></i>
                                <span>${rate}</span>
                            </div>
                            <div class="movie-info">
                                <i class="bx bxs-time"></i>
                                <span>${runtime}</span>
                            </div>
                            <div class="movie-info">
                                <span>HD</span>
                            </div>
                            <div class="movie-info">
                                <span>16+</span>
                            </div>
                        </div>
                    </div>
                    
                </a>
                
            
            `

            })

        }



        // console.log(result);
    } catch (error) {
        console.error(error);
    }
}

async function searchMovie() {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTQ4NjZhYzM5Y2ViOTQ0ODkzNWI0MTBlZmQ0ZGQ1ZCIsIm5iZiI6MTc3NDE4MDgwNC4zMjA5OTk5LCJzdWIiOiI2OWJmZDljNDM0YjEwMzc1NzQxNWU4NDkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.yn-Tk28iCJebKGngMc7F_9I1ASOwIFAx4aInmXfa1ik'
        }
    };
    const movie = document.getElementById('searchMovie').value
    const url = `https://api.themoviedb.org/3/search/movie?query=${movie}&sort_by=popularity.desc`

    try {
        const response = await fetch(url, options)
        if (!response.ok) {
            throw new Error('Error')
        }
        else {
            const data = await response.json()
            const container = document.querySelector('.searchMovie')
            container.innerHTML = ''
            const movie = data.results[0]
            const Img = movie.backdrop_path
            const Title = movie.title
            const overView = movie.overview
            const release = movie.release_date
            const rating = movie.vote_average

            container.innerHTML += `
                <div class="hero-slide-item searchedMovie">
            <img src="https://image.tmdb.org/t/p/w1280${Img}" alt="">
            <div class="overlay"></div>
            <div class="hero-slide-item-content">
                <div class="item-content-wraper">
                    <div class="item-content-title">
                        ${Title}
                    </div>
                    <div class="item-content-title">
                        ${release}
                    </div>
                    <div class="movie-infos">
                        <div class="movie-info">
                            
                            <span>
                                ${rating}
                            </span>
                        </div>

                        <div class="movie-info">
                            <span>
                                HD
                            </span>
                        </div>
                        
                    </div>
                    <div class="item-content-description">
                        ${overView}
                    </div>
                    <div class="item-action">
                        <a href="#" class="btn ">
                            <button class="search-btn" style="background-color: red;"
                type="submit"  onclick="closeSearch()">Close Search</button>
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
                
                `
            container.style.display = 'block'


        }

    } catch (error) {
        console.log(error)
    }
}


async function dopestSeries() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTQ4NjZhYzM5Y2ViOTQ0ODkzNWI0MTBlZmQ0ZGQ1ZCIsIm5iZiI6MTc3NDE4MDgwNC4zMjA5OTk5LCJzdWIiOiI2OWJmZDljNDM0YjEwMzc1NzQxNWU4NDkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.yn-Tk28iCJebKGngMc7F_9I1ASOwIFAx4aInmXfa1ik'
        }
    };
    const seriesName = 'Daredevil: Born Again'
    // const movie = document.getElementById('searchMovie').value
    const url = `https://api.themoviedb.org/3/search/tv?query=${seriesName}`

    try {
        const response = await fetch(url, options)
        if (!response.ok) {
            throw new Error('Error')
        }
        else {
            const data = await response.json()
            const container = document.querySelector('.dopestSeries')
            container.innerHTML = ''
            const movie = data.results[0]
            const Img = movie.backdrop_path
            const Title = movie.name
            const overView = movie.overview
            const release = movie.release_date
            const rating = movie.vote_average
            container.innerHTML += `
            <img src="https://image.tmdb.org/t/p/w1280${Img}" alt="">
            <div class="overlay"></div>
            <div class="hero-slide-item-content">
                <div class="item-content-wraper">
                    <div class="item-content-title">
                        ${Title}
                    </div>
                    <div class="movie-infos">
                        <div class="movie-info">
                            <i class="bx bxs-star"></i>
                            <span>${rating}</span>
                        </div>
                        
                        <div class="movie-info">
                            <span>HD</span>
                        </div>
                        <div class="movie-info">
                            <span>Adult: False</span>
                        </div>
                    </div>
                    <div class="item-content-description">
                        ${overView}
                    </div>
                    <div class="item-action">
                        <a href="https://www.rottentomatoes.com/tv/daredevil_born_again/s02" class="btn btn-hover">
                            <i class="bx bxs-right-arrow"></i>
                            <span>Watch now</span>
                        </a>
                    </div>
                </div>
            </div>
            
            `

        }

    }
    catch (error) {
        console.log(error)
    }
}

async function searchSeries() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTQ4NjZhYzM5Y2ViOTQ0ODkzNWI0MTBlZmQ0ZGQ1ZCIsIm5iZiI6MTc3NDE4MDgwNC4zMjA5OTk5LCJzdWIiOiI2OWJmZDljNDM0YjEwMzc1NzQxNWU4NDkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.yn-Tk28iCJebKGngMc7F_9I1ASOwIFAx4aInmXfa1ik'
        }
    };
    const seriesName = document.getElementById('searchSeries').value
    // const movie = document.getElementById('searchMovie').value
    const url = `https://api.themoviedb.org/3/search/tv?query=${seriesName}&sort_by=popularity.desc`

    try {
        const response = await fetch(url, options)
        if (!response.ok) {
            throw new Error('Error')
        }
        else {
            const data = await response.json()
            const container = document.querySelector('.searchSeries')
            container.innerHTML = ''
            const movie = data.results[0]
            const Img = movie.backdrop_path
            const Title = movie.name
            const overView = movie.overview
            const release = movie.first_air_date
            const rating = movie.vote_average
            container.innerHTML += `
            
        <div class="hero-slide-item searchedMovie">
            <img src="https://image.tmdb.org/t/p/w1280${Img}" alt="">
            <div class="overlay"></div>
            <div class="hero-slide-item-content">
                <div class="item-content-wraper">
                    <div class="item-content-title">
                        ${Title}
                    </div>
                    <div class="item-content-title">
                        ${release}
                    </div>
                    <div class="movie-infos">
                        <div class="movie-info">

                            <span>
                                ${rating}
                            </span>
                        </div>

                        <div class="movie-info">
                            <span>
                                HD
                            </span>
                        </div>
                        <div class="movie-info">
                            <span>
                                
                            </span>
                        </div>
                    </div>
                    <div class="item-content-description">
                        ${overView}
                    </div>
                    <div class="item-action top-down delay-6">
                        <a href="#" class="btn btn-hover">
                            <button class="search-btn" style="background-color: red;"
                type="submit"  onclick="closeSearch2()"><span>Close Search</span></button>
                        </a>
                    </div>

                </div>
            </div>
        </div>
            
            `
            container.style.display = 'block'

        }

    }
    catch (error) {
        console.log(error)
    }
}

function closeSearch() {
    const container = document.querySelector('.searchMovie')
    container.style.display = 'none'
}
function closeSearch2() {
    const container = document.querySelector('.searchSeries')
    container.style.display = 'none'
}

