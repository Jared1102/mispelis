import { useEffect, useState } from "react";
import { Create } from "./components/Create";
import { List } from "./components/List";
import { Searcher } from "./components/Searcher";
import { GetLocalStorage } from "./helpers/GetLocalStorage";

function App() {
    const [films,setFilms] = useState([]);

    useEffect(()=>{
        setFilms(GetLocalStorage('movies'));
        if(films.length===0){
            setFilms(null);
        }
    },[]);

    return (

    <div className="layout">

        {/*Cabecera*/}
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            
            <h1>MisPelis</h1>
        </header>

        {/*Barra de navegación*/}
        <nav className="nav">
            <ul>
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Peliculas</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contacto</a></li>
            </ul>
        </nav>

        <section id="content" className="content">
            {/*Aqui va el listado de peliculas*/}
            <List films={films} setFilms={setFilms}/>
        </section>

        {/*Barra lateral */}
        <aside className="lateral">
            <Searcher/>

            <Create setFilms={setFilms}/>
        </aside>
        <footer className="footer">
            &copy; MisPelis 2023
        </footer>

    </div>
  );
}

export default App;
