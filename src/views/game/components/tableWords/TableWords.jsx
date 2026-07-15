export const TableWords = ({ words }) => (
    <div className="words-list">
        <h3>Palabras ingresadas:</h3>
        <ul>
            {words.map((word) => (
                <li key={word}>{word}</li>
            ))}
        </ul>
    </div>
);
