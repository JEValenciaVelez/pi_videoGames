import Footer from "../footer/Footer";
import Games from "../gamesContainer/Games";
import Nav from "../navBar/Nav";


const Home = () => {

    return (
        <div>
            <header>
                <h1>Bienvenido a la app de juegos</h1>
            </header>
            <nav>
                <Nav />
            </nav>
            <main>
                <h2>aqui el componente gamesContainer</h2>
                <Games/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
};

export default Home;