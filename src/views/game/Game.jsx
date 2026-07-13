import { useState } from "react";
import { Timer } from "./components/Timer";
import "./style/Game.css";

export const Game = () => {
    const [time, setTime] = useState(15);
    const [words, setWords] = useState([]);
    const [currentWord, setCurrentWord] = useState("");

    const onChangeInput = (e) => {
        const word = e.target.value.trim();
        setCurrentWord(word);
        console.log("Palabra ingresada:", word);
    };

    const onSubmitWord = (e) => {
        e.preventDefault();
        if (words.includes(currentWord)) {
            console.log("Palabra ya ingresada:", currentWord);
        } else {
            setWords([...words, currentWord]);
            setCurrentWord("");
        }
    };

    return (
        <section className="game">
            <Timer
                time={time}
                setTime={setTime}
            />
            <form
                className="word-form"
                onSubmit={onSubmitWord}
            >
                <input
                    type="text"
                    id="word"
                    className="word-input"
                    placeholder="Ingresa una palabra"
                    value={currentWord}
                    onChange={onChangeInput}
                />
                <button
                    type="submit"
                    className="submit-word-button"
                >
                    Enviar
                </button>
            </form>
        </section>
    );
};
