import React, { useState, useEffect } from 'react'

function App() {
    const [movieData, setMovieData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
            }
        }

        fetch('https://api.themoviedb.org/3/movie/22?language=en-US', options)
            .then(res => res.json())
            .then(data => {
                setMovieData(data)
            })
            .catch(err => {
                console.error("ERROR:", err)
                setError("Failed to fetch movie data.")
            })
    }, [])

    return (
        <>
            <h1>Movie Info</h1>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {movieData ? (
                <div>
                    <h2>{movieData.title}</h2>
                    <p>{movieData.overview}</p>
                    <p><strong>Release Date:</strong> {movieData.release_date}</p>
                    <p><strong>Rating:</strong> {movieData.vote_average} / 10</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </>
    )
}

export default App

