import { useState } from "react";
import { Timer } from "./components/timer/Timer";
import "./style/Game.css";
import { TableWords } from "./components/tableWords/TableWords";
import { GameOverModal } from "./components/gameOver/GameOverModal";
import { isWordValid } from "../../service/game.service";

const INITIAL_TIME = 1500;

export const Game = () => {
    const [time, setTime] = useState(INITIAL_TIME);
    const [words, setWords] = useState([]);
    const [currentWord, setCurrentWord] = useState("");
    const [points, setPoints] = useState(0);
    const [error, setError] = useState("");
    const [isValidating, setIsValidating] = useState(false);

    const isGameOver = time <= 0;

    const onChangeInput = (e) => {
        setCurrentWord(e.target.value);
        if (error) setError("");
    };

    const onSubmitWord = async (e) => {
        e.preventDefault();

        const word = currentWord.trim();

        const normalized = word.toLowerCase();

        const alreadyExists = words.some((w) => w.toLowerCase() === normalized);
        if (alreadyExists) {
            setError("Palabra ya ingresada");
            return;
        }

        setIsValidating(true);
        const isValid = await isWordValid(normalized);
        setIsValidating(false);
        if (!isValid) {
            setError("Palabra no válida");
            return;
        }

        setWords((prev) => [...prev, word]);
        setPoints((prev) => prev + word.length);
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
            {isGameOver && (
                <GameOverModal
                    isOpen={isGameOver}
                    wordsCount={words.length}
                    onRestart={onRestart}
                />
            )}
            <Timer
                time={time}
                setTime={setTime}
            />
            <p className="points">Puntos: {points}</p>

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
                    disabled={isGameOver || !currentWord.trim() || isValidating}
                >
                    {isValidating ? "Validando..." : "Enviar"}
                </button>
            </form>

            {words.length > 0 && <TableWords words={words} />}
        </section>
    );
};
