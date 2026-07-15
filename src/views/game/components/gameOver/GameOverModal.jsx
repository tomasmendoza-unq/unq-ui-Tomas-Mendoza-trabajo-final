import { Link } from "react-router-dom";
import { Modal } from "../../../../shared/modal/Modal";
import "./style/GameOver.css";

export const GameOverModal = ({ isOpen, wordsCount, onRestart, points }) => (
    <Modal
        isOpen={isOpen}
        onClose={onRestart}
        title="¡Tiempo agotado!"
    >
        <div className="gameover-container">
            {" "}
            <p>
                Has ingresado <strong>{wordsCount}</strong> palabras.
            </p>
            <p>
                Has obtenido <strong>{points}</strong> puntos.
            </p>
            <button
                type="button"
                className="btn btn-primary"
                onClick={onRestart}
            >
                Jugar de nuevo
            </button>
            <Link
                className="btn btn-secondary"
                to="/"
            >
                Volver al inicio
            </Link>
        </div>
    </Modal>
);
