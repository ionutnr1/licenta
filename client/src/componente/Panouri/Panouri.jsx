import React from "react";
import "./Panouri.scss"
import { Link } from "react-router-dom";

const Panouri = ({imagini}) => {
    return (
        <Link to={"/anunturi/"}>
        <div className="panouri">
            <img src={imagini.img} alt="" />
            <span className="descriere">{imagini.desc}</span>
            <span className="titlu">{imagini.title}</span>

        </div>
        </Link>
    )
}

export default Panouri;