import React, { useState } from 'react'
import { GetLocalStorage } from '../helpers/GetLocalStorage';

export const Searcher = ({films,setFilms}) => {
  
  const [search,setSearch]=useState("");
  const [finded,setFind]=useState(true);

  const searchFilm = (e)=>{
    e.preventDefault();
    //Crear estado y actualizarlo
    setSearch(e.target.value);

    //Filtar para buscar coincidencias
    let findMovies = films.filter(movie=>{
      return  movie.title.toLowerCase().includes(search.toLowerCase())
    });

    if(search.length<=1 || findMovies<=0){
      findMovies=GetLocalStorage('movies');
      setFind(false);
    }else{
      setFind(true);
    }

    //Actualizar estado del listado principal con lo que he logrado filtrar
    setFilms(findMovies);
  } 
  return (
    <div className="search">
        <h3 className="title">Buscador</h3>
        {(!finded && search.length>1) && (
          <span className='finded'>No encontrado ninguna coincidencia</span>
        )}
        
        <form>
            <input 
                type="text" 
                id="search_field"
                name='searcher'
                autoComplete='off'
                onChange={searchFilm} />
            <button id="search">Buscar</button>
        </form>
    </div>
  )
}
