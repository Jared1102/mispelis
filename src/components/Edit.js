import React from 'react'
import { GetLocalStorage } from '../helpers/GetLocalStorage';

export const Edit = ({movie,setEdit,setFilms}) => {
    const componentTitle = "Editar";

    const updateMovie = (e,id)=>{
        e.preventDefault();
        
        //Conseguir el target del evento
        let target = e.target;
        
        //Buscar el indice del objeto de la pelicula
        let savedMovies=GetLocalStorage('movies');
        let index = savedMovies.findIndex(movie=>movie.id===id);
        
        //Crear objecto con ese indice
        let editMovie = {
            id,
            title:target.title.value,
            description:target.description.value
        };

        //Actualizar el elemento con ese indice
        savedMovies[index]=editMovie;
        
        //Guardar el nuevo array en el local Storage
        localStorage.setItem('movies',JSON.stringify(savedMovies));

        //Actualizar estados
        setFilms(savedMovies);
        setEdit(0);
    };

    return (
    <div className='edit_form'> 
        <h3 className='title'>{componentTitle}: {movie.title}</h3>
        <form onSubmit={e=>updateMovie(e,movie.id)}>
            <input type='text'
                    name='title'
                    className='edit_title'
                    defaultValue={movie.title}></input>
            
            <textarea
                name='description'
                className='edit_description'
                defaultValue={movie.description}
            ></textarea>
            
            <input type='submit' className='edit_submit' value='Actualizar'></input>
        </form>
    </div>
  )
}
