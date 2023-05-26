import Footer from "../footer/Footer";
import Games from "../gamesContainer/Games";
import Nav from "../navBar/Nav";
import './home.css';


const Home = () => {

    return (
        <div className="home-container">
           
            <main className="menu">
                {/* <h2>Mira aqui tus videojuegos</h2> */}
                <section className="section-right">
                <Nav />
                </section >
                <section className="section-left">
                <Games/>
                </section>
                
            </main>
            <footer className="footer">
                <Footer/>
            </footer>
        </div>
    )
};

export default Home;