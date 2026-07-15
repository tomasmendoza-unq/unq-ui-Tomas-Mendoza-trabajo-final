import { Modal } from "../../../../shared/modal/Modal";

export const GameOverModal = ({ isOpen, wordsCount, onRestart }) => (
    <Modal
        isOpen={isOpen}
        onClose={onRestart}
        title="¡Tiempo agotado!"
    >
        <p>Has ingresado {wordsCount} palabras.</p>
        <button
            type="button"
            onClick={onRestart}
        >
            Jugar de nuevo
        </button>
    </Modal>
);
