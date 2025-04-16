import React, { useState, useEffect } from 'react'

function App() {
    const [movieData, setMovieData] = useState(null);
    const [error, setError] = useState(null);
    const [input, setInput] = useState("");

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
            }
        }

        fetch(`https://api.themoviedb.org/3/search/movie?query=${input}&include_adult=false&language=en-US&page=1`, options)
            .then(res => res.json())
            .then(data => {
                setMovieData(data)
            })
            .catch(err => {
                console.error("ERROR:", err)
                setError("Failed to fetch movie data.")
            })
    }, [input])






    return (
        <>
            <h1>Movie Info</h1>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <input id="input-1" value={input} onChange={(e) => setInput(e.target.value)}></input>

            {movieData ? (
                movieData.results.map((movie) => (
                <div>
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                    <p><strong>Release Date:</strong> {movie.release_date}</p>
                    <p><strong>ID:</strong> {movie.id}</p>
                </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </>
    )
}

export default App

