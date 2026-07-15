import { useEffect } from "react";
import "./style/Timer.css";

export const Timer = ({ time, setTime }) => {
    useEffect(() => {
        if (time <= 0) return;

        const interval = setInterval(() => {
            setTime((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [time, setTime]);

    return (
        <section className="timer">
            <h2>Tiempo restante: {time} segundos</h2>
        </section>
    );
};
