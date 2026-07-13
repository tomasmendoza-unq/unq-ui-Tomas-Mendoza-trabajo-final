import { Link } from "react-router-dom";
import "./style/Home.css";

export const Home = () => {
    return (
        <section className="home">
            <h1>Bienvenido a Cruzados</h1>
            <p>Un juego diseñado para exprimir tu mente con palabras</p>
            <Link
                to="/game"
                className="home-button"
            >
                Jugar
            </Link>
        </section>
    );
};
