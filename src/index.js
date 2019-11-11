// import axios from './auth.js';
// import apiKey from '../src/auth.js';
import axios from 'axios';
import auth from './auth.js';

console.log('toto');

function getGamesPage(pageNumber = 1) {
  return axios({
    method: 'GET',
    url: 'https://rawg-video-games-database.p.rapidapi.com/games',
    headers: {
      'content-type': 'application/octet-stream',
      'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
      ...auth,
    },
    params: {
      page: pageNumber,
    },
  });
}

async function get3GamesPages() {
  const games = await Promise.all([
    getGamesPage(1),
    getGamesPage(2),
    getGamesPage(3),
  ]);
  console.log(games);
  // console.log('ratings', games[0].data.results[0].ratings_count);
}

get3GamesPages();
// const filteredCount = games.filter(game =>
//   game.data.results.filter(result => result.ratings_count)
// );
// console.log('hey', filteredCount);
