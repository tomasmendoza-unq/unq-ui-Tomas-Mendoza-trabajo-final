import { Modal } from "../../../../shared/modal/Modal";
import "./style/InstructionsModal.css";
export const InstructionsModal = ({ isOpen, onClose }) => (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="¿Cómo jugar?"
    >
        <div className="instructions-container">
            <p className="instructions-intro">
                El objetivo es encadenar la mayor cantidad de palabras posibles
                antes de que se acabe el tiempo. Cada palabra que ingreses debe
                cumplir con estas reglas:
            </p>

            <ol className="instructions-list">
                <li>
                    <span className="rule-badge">1</span>
                    <p>
                        Debe existir en el{" "}
                        <strong>diccionario de español</strong>.
                    </p>
                </li>
                <li>
                    <span className="rule-badge">2</span>
                    <p>
                        No puede haber sido{" "}
                        <strong>utilizada anteriormente</strong> durante la
                        partida.
                    </p>
                </li>
                <li>
                    <span className="rule-badge">3</span>
                    <p>
                        Debe comenzar con la <strong>última letra</strong> de la
                        palabra válida anterior.
                    </p>
                </li>
            </ol>

            <div className="instructions-example">
                <span className="example-tag">Ejemplo:</span>
                <p>
                    Amor → <span>R</span>atón → <span>N</span>ube →{" "}
                    <span>E</span>spejo
                </p>
            </div>

            <button
                type="button"
                className="btn btn-primary btn-start"
                onClick={onClose}
            >
                ¡Entendido, a jugar!
            </button>
        </div>
    </Modal>
);
