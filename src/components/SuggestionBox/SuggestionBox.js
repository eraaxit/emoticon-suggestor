import "./styles.css";

const SuggestionBox = ({ position, emoji,current_emoji }) => {
    return (
        <div className="container-flex-center tertiarybg suggestionbox" style={ position }>

            <div className={current_emoji===0 &&emoji[0]!=="..."?"selected":""}>{emoji[0]}</div>
            <div className={current_emoji===1?"selected":""}>{emoji[1]}</div>
            <div className={current_emoji===2?"selected":""}>{emoji[2]}</div>
            <div className={current_emoji===3?"selected":""}>{emoji[3]}</div>
        
        </div>
    )
}

export default SuggestionBox
