import { useState } from "react";
import { Link } from "react-router-dom";
import "./style/Home.css";
import { InstructionsModal } from "./components/instrucctions/InstructionsModal";

export const Home = () => {
    const [isInstructionsOpen, setIsInstructionsOpen] = useState(false);

    return (
        <section className="home">
            <h1>Bienvenido a Cruzados</h1>
            <p>Un juego diseñado para exprimir tu mente con palabras</p>

            <Link
                to="/game"
                className="home-button home-button-primary"
            >
                Jugar
            </Link>

            <button
                type="button"
                className="home-button home-button-secondary"
                onClick={() => setIsInstructionsOpen(true)}
            >
                ¿Cómo jugar?
            </button>

            <InstructionsModal
                isOpen={isInstructionsOpen}
                onClose={() => setIsInstructionsOpen(false)}
            />
        </section>
    );
};
