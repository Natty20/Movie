import React, { useState } from 'react';
import './List.css';

function EditMovieForm({ movie, onSave, onCancel }) {

    const [FormMovie, setFormMovie] = useState(movie);
    // const [movieName, setMovieName] = useState([])
    // const [movieLanguage, setMovieLanguage] = useState([])
    // const [movieImage, setMovieImage] = useState([])

    const handleChange = (e) => {
        const { name, language, image, value } = e.target;
        setFormMovie({ ...FormMovie, [name]: value, [language]: value, [image]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(FormMovie);
    };
    return (
        <div className="add">
            <form className="forms d-flex flex-column bg-white ounded-3" onSubmit={handleSubmit}
            onClick={(e) => {
                e.stopPropagation()
            }}
                >
            <div className="form-group">
                <label>Modifier une un tableau</label>
                    <input type="text" className="form-control" placeholder='name' value={FormMovie.name} onChange={handleChange}
                 />
                    <input type="text" className="form-control" placeholder='language' value={FormMovie.language} onChange={handleChange}
                    />
                    <input type="text" className="form-control" placeholder='image' value={FormMovie.image} onChange={handleChange}
                    />
            </div>
            <div className="form-group mt-3">
                <input type="submit" className="btn btn-primary" value="Modifier" />
                    <input type="submit" value="canczl" onClick={onCancel} />            </div>
        </form>
        </div>
    );
}

export default EditMovieForm;
