const url = 'https://api.themoviedb.org/3/movie/movie_id?language=en-US';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    // Authorization: 'Bearer '
    Authorization: `${API_key}`
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));