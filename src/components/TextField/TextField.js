import { useEffect, useRef, useState } from "react";
import SuggestionBox from "../SuggestionBox/SuggestionBox";
import getCaretCoordinates from "../../Helpers/caretPosition";
import data from "../../data/data.json";
import "./styles.css";

const TOP_OFFSET = -40;
const ENTER_KEY = 13;

const TextField = () => {

    const [ textValue, setTextValue ] = useState("");
    const textareaRef = useRef(null);
    const [ suggestionBoxPosition, setSuggestionBoxPosition ] = useState({ top: 0, left: 0, display: "none" });
    const [ emoji, setEmoji ] = useState("...");

    useEffect( () => {
        const textentered = textValue.split(" ");
        const keyword = textentered[textentered.length-1];
        const relevantEmoji = data.find( item => item.keywords.includes(keyword));
        setEmoji(relevantEmoji ? relevantEmoji.emoji : "..." );
    }, [ textValue ])

    const getCursoryPosition = () => {
        const pos = textareaRef.current.selectionStart;
        const { top, left } = getCaretCoordinates(textareaRef.current, pos);
        setSuggestionBoxPosition({ top: top + TOP_OFFSET, left, display: "flex" });
    };

    const onChangeLogic = (e) => {
        setTextValue( e.target.value );
        if( !textValue ) return setSuggestionBoxPosition({ top: 0, left: 0, display: "none" })
        getCursoryPosition()
    }


    return (
        <div className="container-flex-center textfield_container">
            <SuggestionBox emoji={emoji} position={suggestionBoxPosition} />
            <textarea
                ref={ textareaRef }
                value={ textValue }
                onChange={ onChangeLogic }
                onKeyDown={ e => {
                    if( emoji !== "..." && (e.keyCode === ENTER_KEY || e.code === "Enter") ){
                        e.preventDefault();
                        setTextValue(textValue+emoji+" ");
                        setEmoji("...")
                    }
                }}
                placeholder="Type (smile, haha)..."
            >
            </textarea>
        </div>
    )
}

export default TextField