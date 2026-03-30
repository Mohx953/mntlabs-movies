// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTQ4NjZhYzM5Y2ViOTQ0ODkzNWI0MTBlZmQ0ZGQ1ZCIsIm5iZiI6MTc3NDE4MDgwNC4zMjA5OTk5LCJzdWIiOiI2OWJmZDljNDM0YjEwMzc1NzQxNWU4NDkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.yn-Tk28iCJebKGngMc7F_9I1ASOwIFAx4aInmXfa1ik'
//   }
// };

// fetch('https://api.themoviedb.org/3/movie/latest', options)
//   .then(res => res.json())
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// const apiKey = 'yxguJfwJqA71ofMfzsZp8bltNsihHYZuo0dN0wNj';
// const startDate = 20260101;
// const endDate = 20261231;
// const regions = 'US,GB';
// const url = `https://api.watchmode.com/v1/title-release-dates/?apiKey=${apiKey}&start_date=${startDate}&end_date=${endDate}&regions=${regions}`;

// fetch(url)
// .then (res => res.json())
// .then(res => console.log(res))
// .catch(err => console.log(err))


// const url = 'https://epic-games-store-free-games.p.rapidapi.com/free?country=US';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '893da18b1cmsh11c06aeb5fd8b73p1d1b63jsn03d20ee90df8',
// 		'x-rapidapi-host': 'epic-games-store-free-games.p.rapidapi.com',
// 		'Content-Type': 'application/json'
// 	}
// };

// getGames()

// async function getGames(){

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();
// 	console.log(result.currentGames);
// } catch (error) {
// 	console.error(error);
// }
// }

// const url = 'https://imdb236.p.rapidapi.com/api/imdb/most-popular-tv';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '',
// 		'x-rapidapi-host': 'imdb236.p.rapidapi.com',
// 		'Content-Type': 'application/json'
// 	}
// };



// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// trendingTvShows()

// async function trendingTvShows(){


// const url='https://api.trakt.tv/movies/trending'
// const options={
//     headers: {
//         'Content-Type': 'application/json',
//         'trakt-api-version': '2',
//         'trakt-api-key': '9bfe09ad193e2cf44dcc2ff0e745377033c8a6b08746c63ccb0963c862eb72d5'
//     }
// }
// try{
// const response = await fetch(url, options)
// const result = await response.json();
// console.log(result[0]);
// }
// catch(error){
//     console.log(error)
// }
// }
// const query='Fast X'
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTQ4NjZhYzM5Y2ViOTQ0ODkzNWI0MTBlZmQ0ZGQ1ZCIsIm5iZiI6MTc3NDE4MDgwNC4zMjA5OTk5LCJzdWIiOiI2OWJmZDljNDM0YjEwMzc1NzQxNWU4NDkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.yn-Tk28iCJebKGngMc7F_9I1ASOwIFAx4aInmXfa1ik'
//   }
// };

// fetch(`https://api.themoviedb.org/3/search/movie?query=${query}`, options)
//   .then(res => res.json())
//   .then(res => console.log(res.results[0]))
//   .catch(err => console.error(err));

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTQ4NjZhYzM5Y2ViOTQ0ODkzNWI0MTBlZmQ0ZGQ1ZCIsIm5iZiI6MTc3NDE4MDgwNC4zMjA5OTk5LCJzdWIiOiI2OWJmZDljNDM0YjEwMzc1NzQxNWU4NDkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.yn-Tk28iCJebKGngMc7F_9I1ASOwIFAx4aInmXfa1ik'
  }
};
const series ='Daredevil: Born Again'

fetch(`https://api.themoviedb.org/3/search/tv?query=${series}`, options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));