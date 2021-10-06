import { useState } from "react";
import "./styles.css";

const TextField = () => {

    const [ textValue, setTextValue ] = useState("")

    return (
        <div className="container-flex-center textfield_container">
            <textarea
                value={ textValue }
                onChange={ e => setTextValue( e.target.value )}
            />
        </div>
    )
}

export default TextField