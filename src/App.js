import React, { useState, useEffect } from 'react'

function App() {
    const [movieData, setMovieData] = useState(null);
    const [error, setError] = useState(null);
    const [input, setInput] = useState(null);

    useEffect(() => {

        if (!input) {
            return
        }

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
            }
        }

        fetch(`https://api.themoviedb.org/3/movie/${input}/credits?language=en-US`, options)
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

            {movieData ? ( movieData.cast ? (
                movieData.cast.map((person) => (
                <div>
                    <h2>{person.name}</h2>
                    <p>{person.id}</p>
                </div>
                ))) : <p>No films found</p>
            ) : (
                <p>Loading...</p>
            )}
        </>
    )
}

export default App



