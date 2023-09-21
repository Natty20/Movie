import React, { useState } from 'react';
import './List.css';

function AddMovieForm({ addMovie }) {
    const [name, setName] = useState([])
    const [language, setLanguage] = useState([])
    const [image, setImage] = useState([])

    return (
        <div className="add">
            <form onSubmit={(e) => {
                e.preventDefault()
                if (name.length, language.length, image.length > 0) {
                    addMovie(name, language, image)
                } else {
                    alert('oups c\'est vide')
                }
            }}>
                <label>Name :</label>
                <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
                <label>Language :</label>
                <input type="text" value={language} onChange={(e) => { setLanguage(e.target.value) }} />
                <label>Image :</label>
                <input type="text" value={image} onChange={(e) => { setImage(e.target.value) }} />
                <div className="form-group">
                    <input type="submit" className="btn btn-primary" value="Add movie" />
                </div>
            </form>
        </div>
    );
}

export default AddMovieForm;
