import { Timer } from "./components/Timer";
import "./style/Game.css";

export const Game = () => {
    return (
        <section className="game">
            <Timer />
            <input
                type="text"
                className="word-input"
                placeholder="Ingresa una palabra"
            />
        </section>
    );
};
