import './List.css'
import React, { useState, useEffect } from 'react'
import AddMovieForm from './AddMovieForm'
import { v4 as uuidv4 } from 'uuid'
import DelMovieForm from './DelMovieForm'
import EditMovieForm from './EditMovieForm'

export default function Movies(movie) {
    
    const [movies, setMovies] = useState([])
    const [popinVisible, setPopinVisible] = useState(null)
    const [movieName, setMovieName] = useState(movie.name)
    const [movieLanguage, setMovieLanguage] = useState(movie.language)
    const [movieImage, setMovieImage] = useState(movie.image)

    useEffect(() => {
        setMovies([
            {
                id: '1',
                name: 'Avatar',
                language: 'English',
                image: 'https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_.jpg'
            },
            {
                id: '2',
                name: 'Murder',
                language: 'Spanish',
                image: 'https://flxt.tmsimg.com/assets/p10777346_b_v13_bi.jpg'
            },
            {
                id: '3',
                name: 'River side',
                language: 'Portuguese',
                image: 'https://m.media-amazon.com/images/M/MV5BMjEyMjQzMDMyMV5BMl5BanBnXkFtZTcwNzUzMDU1MQ@@._V1_.jpg'
            },
            {
                id: '4',
                name: 'Randall',
                language: 'French',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfOB_htd4lDyfGtrLm1AlbVARKy6ZTAX2lUvGeOX_xxnDzjG6tSobOZOciGwwCW42jQRA&usqp=CAU'
            }
        ])
    }, [])

    // popp fcn 
    function hidePopin(id, name, language, image) {
        setPopinVisible({ id, name, language, image })
    }

    // add movie fcn
    function addMovie(name, language, image) {
        setMovies([...movies, { id: uuidv4(), name: name, language: language, image: image }])
    }

    //  delete fcn
    function deleteMovie(id) {
        let newMovie = movies.filter((tab) => tab.id.toString() !== id.toString())
        setMovies(newMovie)
    }

    // modier fcn 
    function updateMovie(id) {
        // let EditMovie = movies.find(movie => movie.id === id);
        let newName = prompt('Enter new name:')
        let newLanguage = prompt('Enter new language:')
        let newImage = prompt('Enter new image:')

        if (newName, newLanguage, newImage) {
            let editedMovie = movies.map(movie =>
                movie.id === id ? { ...movies, name: newName, language :  newLanguage, image : newImage } : movie
            );
            setMovies(editedMovie);
        }
    };

    return (
        <main className='users-list'>
            <h1>liste des nos Film</h1>
            <section className="container">
                {movies.map((movie) => (
                    <div key={movie.id} className='identity' onClick={() => hidePopin(movie.id, movie.name, movie.language, movie.image)}>
                        <img className='image' src={movie.image} alt='image'></img>
                        <p className='title'>{movie.name}</p>
                        <p className='gender'>{movie.language}</p>

                        <div className='butn'>
                            <button onClick={() => updateMovie(movie.id)}>Modifier</button>
                        </div>
                    </div>
                ))}
            </section>
            {/* {popinVisible && <Popin id={popinVisible.id} name={popinVisible.name} image={popinVisible.image} hidePopin={hidePopin} />} */}

            {popinVisible && <Popin hidePopin={hidePopin} />}

            {/* add movie form */}
            <h1> Ajouter un film via ce formulaire</h1>
            <AddMovieForm addMovie={addMovie} />

            {/* delete movie form */}
            <DelMovieForm movies={movies} deleteMovie={deleteMovie} />
        </main>
    )

    function Popin({ hidePopin }) {
        return (
            <div className="popup-overlay" onClick={() => {
                // Si on souhaite modifier le state du composant parent, on doit le faire via une fonction qu'on va transmettre via une prop du parent à l'enfant (De App à Popin) et c'est la fonction hidePopin qui va modifier le state popiVisible du parent
                hidePopin(true)
            }}>

                {/* popup to display movi's details */}
                <div className="popup"
                    onClick={(e) => {
                        e.stopPropagation()
                    }}>
                    <img className='imagePop' src={popinVisible.image} alt='image'></img>
                    <p>{popinVisible.name}</p>
                    <p>{popinVisible.language}</p>
                </div>

                {/* edit movie form */}

                {/* <EditMovieForm movie={FormMovie} onSave={handleSave} /> */}
            </div>
        )
    }
}
