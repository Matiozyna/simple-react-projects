import React, { useState } from "react";

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
            <button onClick={search} className={`m-2 btn btn-${props.theme}`}>
                Szukaj
            </button>
        </div>
    );
}

export default Searchbar;
