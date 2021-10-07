import randomEmoji from "../../Helpers/randomEmoji";
import "./styles.css";

const Header = () => {
    return (
        <div className="container-flex-center primarybg header-container">
            <div className="header_logo primaryclr">
                { randomEmoji() } Emoticon Suggestor { randomEmoji() }
            </div>
        </div>
    )
}

export default Header
