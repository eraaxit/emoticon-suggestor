import "./styles.css";

const SuggestionBox = ({ position, emoji }) => {
    return (
        <div className="container-flex-center tertiarybg suggestionbox" style={ position }>
            { emoji }
        </div>
    )
}

export default SuggestionBox
