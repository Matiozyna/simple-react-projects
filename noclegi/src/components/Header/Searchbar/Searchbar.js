import React, {useState} from "react";
import {Button} from 'reactstrap'

function Searchbar(props) {


    const [term, setTerm] = useState('');

    const keyDownEventHandler = (e) => {
        if (e.key === "Enter") search();
    }

    const search = () => {
        props.onSearch(term)
    }

    return (
        <div className="d-flex">
            <input
                onChange={e => setTerm(e.target.value)}
                onKeyDown={keyDownEventHandler}
                className="form-control"
                type="text"
                placeholder="Szukaj...."/>
            <button
                onClick={search}
                className={"btn btn-primary"}>
                Szukaj
            </button>
        </div>
    );
}

export default Searchbar;

