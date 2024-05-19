import React from "react";
import "./Categorii.scss"
import Slider from 'infinite-react-carousel';
import Panouri from "../Panouri/Panouri";
import {panouri} from "../../data"

const Categorii = () => {
    return (
        <div className="categorii">
            <div className="container">
                <Slider slidesToShow={5} autoplay={true} pauseOnHover={true}>
                    {panouri.map(panou=>(
                        <Panouri imagini = {panou} key={panou.id}/>
                    ))}
                </Slider>
            </div>

        </div>
    );
};

export default Categorii;