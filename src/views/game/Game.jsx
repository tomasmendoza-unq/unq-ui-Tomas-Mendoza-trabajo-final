import { useState } from "react";
import { Timer } from "./components/Timer";
import "./style/Game.css";

export const Game = () => {
    const [time, setTime] = useState(15);
    const [words, setWords] = useState([]);

    return (
        <section className="game">
            <Timer
                time={time}
                setTime={setTime}
            />
            <input
                type="text"
                className="word-input"
                placeholder="Ingresa una palabra"
            />
        </section>
    );
};
