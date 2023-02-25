import React from "react";
import styles from "./Hotel.module.css";
import hotelImg from "../../../assets/images/hotel.jpg";
import PropTypes from "prop-types";

const propTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
};

const defaultProps = {
    missing: "to jest tekst domyślny",
};

function Hotel(props) {
    return (
        <div className={`card ${styles.hotel}`}>
            <div className="card-body">
                <div className="row">
                    <div className="col-4">
                        <img
                            src={hotelImg}
                            alt=""
                            className="img-fluid img-thumbnail"
                        />
                    </div>
                    <div className="col-8 ">
                        <div className="row">
                            <div className="col">
                                <p className={styles.title}>{props.name}</p>
                                <span
                                    style={{ color: "black" }}
                                    className="badge badge-light"
                                >
                                    {props.city}
                                </span>
                            </div>
                            <div className="col">
                                <h4>
                                    Ocena: {props.rating} <br />
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <p className={styles.desctiption}>
                            {props.description}
                        </p>
                        <a
                            href="#"
                            className={`btn btn-${props.theme} float-end px-5`}
                        >
                            Pokaż
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

Hotel.propTypes = propTypes;
Hotel.defaultProps = defaultProps;
export default Hotel;
