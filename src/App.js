import { Create } from "./components/Create";
import { List } from "./components/List";
import { Searcher } from "./components/Searcher";

function App() {
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
            <List/>
        </section>

        {/*Barra lateral */}
        <aside className="lateral">
            <Searcher/>

            <Create/>
        </aside>
        <footer className="footer">
            &copy; MisPelis 2023
        </footer>

    </div>
  );
}

export default App;
