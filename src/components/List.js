import React from 'react';
import { GetLocalStorage } from '../helpers/GetLocalStorage';

export const List = ({films,setFilms}) => {

  //const [films,setFilms] = useState([]);


  //Primero los useEffect y despues las demas funciones incluyendo otros hooks
  const deleteMovie = (id)=>{
    //Conseguir peliculas almacenadas
    let movies = GetLocalStorage('movies');

    //Filtar
    let newMovies = movies.filter(movie=>
        movie.id!==parseInt(id)
    );
    setFilms(newMovies);
    
    localStorage.setItem('movies',JSON.stringify(newMovies));
  };

  return (
    <>  
        {films != null ? (
          films.map((movie)=>{
          return (
            <article className='peli-item' key={movie.id}>
              <h3 className='title'>{movie.title}</h3>
              <p className='description'>
                {movie.description}
              </p>

              <button className="edit">Editar</button>
              <button className="delete" onClick={()=>{deleteMovie(movie.id)}}>Borrar</button>
            </article>
          )
        })):
        <h2>No hay peliculas disponibles.</h2>}
    </>
  )
}
