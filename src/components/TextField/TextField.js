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
    const [ emoji, setEmoji ] = useState(["..."]);
    const [ current_emoji,setCurrent_emoji] = useState(0);

    useEffect( () => {
        const textentered = textValue.split(" ");
        const keyword = textentered[textentered.length-1];
        let emojis = data.filter( item => item.keywords.includes(keyword.toLowerCase()))
        if(emojis.length>0 && emojis.length<110){
            setEmoji(emojis.slice(0,4).map(eachEmojiObject => eachEmojiObject.emoji));
        }
    }, [ textValue ])

    const getCursoryPosition = () => {
        const pos = textareaRef.current.selectionStart;
        const { top, left } = getCaretCoordinates(textareaRef.current, pos);
        setSuggestionBoxPosition({ top: top + TOP_OFFSET, left, display: "flex" });
    };

    const onChangeLogic = (e) => {
        setTextValue( e.target.value );
        if( !e.target.value ) return setSuggestionBoxPosition({ top: 0, left: 0, display: "none" })
        getCursoryPosition()
    }

    return (
        <div className="container-flex-center textfield_container">
            <SuggestionBox emoji={emoji} position={suggestionBoxPosition} current_emoji={current_emoji}/>
            <textarea
                ref={ textareaRef }
                value={ textValue }
                onChange={ onChangeLogic }
                onKeyDown={ e => {
                    if( emoji !== "..." && ( e.code === "Enter" || e.keyCode === ENTER_KEY) ){
                        e.preventDefault();
                        setTextValue(textValue+emoji[current_emoji]+" ");
                        setEmoji(["..."]);
                        setCurrent_emoji(0);
                    }
                    if( emoji !== "..." && (e.code === "ArrowRight" || e.keyCode === '37' ) ){
                        e.preventDefault();
                        if(current_emoji===emoji.length-1){
                            setCurrent_emoji(0);
                        }
                        else setCurrent_emoji(current_emoji+1);;
                    }
                    if( emoji !== "..." && ( e.code === "ArrowLeft" || e.keyCode === '39') ){
                        e.preventDefault();
                        if(current_emoji===0){
                            setCurrent_emoji(emoji.length-1)
                        }
                        else setCurrent_emoji(current_emoji-1);
                    }

                }}
                placeholder="Type (smile, haha)..."
            >
            </textarea>
        </div>
    )
}

export default TextField