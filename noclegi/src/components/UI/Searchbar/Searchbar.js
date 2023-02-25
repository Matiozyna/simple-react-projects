import React, { useState } from "react";
import ThemeContext from "../../../context/themeContext";

function Searchbar(props) {
    console.log(props);
    const [term, setTerm] = useState("");

    const keyDownEventHandler = (e) => {
        if (e.key === "Enter") search();
    };

    const search = () => {
        props.onSearch(term);
    };

    return (
        <div className="d-flex">
            <input
                onChange={(e) => setTerm(e.target.value)}
                onKeyDown={keyDownEventHandler}
                className="form-control m-2"
                type="text"
                placeholder="Szukaj...."
            />
            <ThemeContext.Consumer>
                {(value) => (
                    <button onClick={search} className={`m-2 btn btn-${value}`}>
                        Szukaj
                    </button>
                )}
            </ThemeContext.Consumer>
        </div>
    );
}

export default Searchbar;
