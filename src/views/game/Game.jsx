import { useState } from "react";
import { Timer } from "./components/timer/Timer";
import "./style/Game.css";
import { TableWords } from "./components/tableWords/TableWords";
import { GameOverModal } from "./components/gameOver/GameOverModal";

const INITIAL_TIME = 15;

export const Game = () => {
    const [time, setTime] = useState(INITIAL_TIME);
    const [words, setWords] = useState([]);
    const [currentWord, setCurrentWord] = useState("");
    const [error, setError] = useState("");

    const isGameOver = time <= 0;

    const onChangeInput = (e) => {
        setCurrentWord(e.target.value);
        if (error) setError("");
    };

    const onSubmitWord = (e) => {
        e.preventDefault();

        const word = currentWord.trim();
        if (!word) return;

        const normalized = word.toLowerCase();
        const alreadyExists = words.some((w) => w.toLowerCase() === normalized);

        if (alreadyExists) {
            setError("Palabra ya ingresada");
            return;
        }

        setWords((prev) => [...prev, word]);
        setCurrentWord("");
        setError("");
    };

    const onRestart = () => {
        setTime(INITIAL_TIME);
        setWords([]);
        setCurrentWord("");
        setError("");
    };

    return (
        <section className="game">
            <Timer
                time={time}
                setTime={setTime}
            />

            {words.length > 0 && <TableWords words={words} />}

            {isGameOver && (
                <GameOverModal
                    isOpen={isGameOver}
                    wordsCount={words.length}
                    onRestart={onRestart}
                />
            )}

            <form
                className="word-form"
                onSubmit={onSubmitWord}
            >
                <label htmlFor="word">Ingresa una palabra</label>
                <input
                    type="text"
                    id="word"
                    className="word-input"
                    placeholder="Ej: manzana"
                    value={currentWord}
                    onChange={onChangeInput}
                    disabled={isGameOver}
                />
                {error && (
                    <p
                        className="error-message"
                        role="alert"
                        aria-live="polite"
                    >
                        {error}
                    </p>
                )}
                <button
                    type="submit"
                    className="submit-word-button"
                    disabled={isGameOver || !currentWord.trim()}
                >
                    Enviar
                </button>
            </form>
        </section>
    );
};
