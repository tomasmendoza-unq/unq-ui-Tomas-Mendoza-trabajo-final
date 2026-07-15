import "./style/TableWords.css";

export const TableWords = ({ words }) => (
    <section className="words-list">
        <h3>Palabras ingresadas:</h3>
        <ul>
            {words.map((word) => (
                <li key={word}>{word}</li>
            ))}
        </ul>
    </section>
);
