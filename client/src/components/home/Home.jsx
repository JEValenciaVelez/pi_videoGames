import Footer from "../footer/Footer";
import Games from "../gamesContainer/Games";
import Nav from "../navBar/Nav";
import './home.css';


const Home = () => {

    return (
        <div className="home-container">
            <header className="encabezado">
                <h1>Bienvenido a la app de juegos</h1>
            </header>
            <nav className="nav-bar">
                <Nav />
            </nav>
            <main className="menu">
                <h2>Mira aqui tus videojuegos</h2>
                <Games/>
            </main>
            <footer className="footer">
                <Footer/>
            </footer>
        </div>
    )
};

export default Home;