import React, { useState, useEffect } from 'react'
// import API_key from './.env'

// const tmdb_key = process.env.REACT_APP_API_KEY
// console.log("API Key:", tmdb_key);

console.log("API Key:", process.env.REACT_APP_API_KEY);


function App() {

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDY0YzFkM2YxNWUwNzlmMzQ3NmNmM2Y0YjZmZDNlNyIsIm5iZiI6MTc0NDcyODk2Ni4yMDYsInN1YiI6IjY3ZmU3Mzg2MzExMGJkODJkZmFkNzYyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CRUfnfJ60zqVbxSGDnkZuXxMdqRpqTt5cGah7UzYyZA'
        }
      };
      
    //   fetch('https://api.themoviedb.org/3/movie/movie_id?language=en-US', options)
    //     .then(res => res.json())
    //     .then(res => console.log("SOMETHING:" + res))
    //     .catch(err => console.error("ERROR:" + err));

        const url = `https://api.themoviedb.org/3/movie/76341?api_key=${process.env.REACT_APP_API_KEY}`

        // fetch(url, options)
        fetch(url)
        .then(res => res.json())
        .then(json => console.log("SOMETHING v2: " + json))
        .catch(err => console.error("ERROR: " + err));
    
    return <>
        <h1>Hi :)</h1>
        <p>options</p>

    </>
}

export default App