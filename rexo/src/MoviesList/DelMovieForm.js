import React, { useState } from 'react'

function DelMovieForm({ movies, deleteMovie }) {

    const [idMovie, setIdMovie] = useState(null)

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            if (idMovie !== null)
                deleteMovie(idMovie)
        }}>
            <div className="form-group">
                <label>Choose a movie to delete</label>
                <select value={idMovie} className="form-control" onChange={(e) => {
                    setIdMovie(e.target.value)
                }}>
                    {movies.map((movie, index) => {
                        return <option key={index} value={movie.id}>{movie.name}</option>
                    })}
                </select>
                <div className="form-group">
                    <input type="submit" className="btn btn-danger" value="Delete movie" />
                </div>
            </div>
        </form>
    )
}

export default DelMovieForm
