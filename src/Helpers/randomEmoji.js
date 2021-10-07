import emoticonsForLogo from "../data/emoticonsForLogo";

const randomEmoji = () => {
    return emoticonsForLogo[Math.floor(Math.random() * emoticonsForLogo.length)];
}

export default randomEmoji;