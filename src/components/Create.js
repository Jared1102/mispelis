import React, { useState } from 'react'
import { SaveLocalStorage } from '../helpers/SaveLocalStorage';
import { GetLocalStorage } from '../helpers/GetLocalStorage';

export const Create = ({setFilms}) => {
    const titleComponent="Añadir pelicula";
    const [film,setFilm]=useState();

    const getMovieData = (e)=>{
        e.preventDefault();

        //Conseguir datos del formulario
        let data = e.target;
        let movie={
            id: new Date().getTime(),
            title: data.title.value,
            description: data.description.value
        };

        //Guardar estado
        setFilm(movie);
        
        //Guardar en LocalStorage
        SaveLocalStorage('movies',movie);
        setFilms(GetLocalStorage('movies'));
    };

    return (
    <div className="add">
        <h3 className="title">{titleComponent}</h3>
        {film && (<p>Se ha creado <br/><strong>{film.title}</strong></p>)}

        <form onSubmit={getMovieData}>
            <input type="text" id="title" name='title' placeholder="Titulo" />
            <textarea id="description" name="description" placeholder="Descripción"></textarea>
            <input type="submit" id="save" value="Guardar" />
        </form>
    </div>
  )
}
