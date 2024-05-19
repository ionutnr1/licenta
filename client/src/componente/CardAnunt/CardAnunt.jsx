import React from 'react'
import "./CardAnunt.scss"
import { Link } from 'react-router-dom'

const CardAnunt = ({item}) => {
    return (
        <Link to='/anunt/1' className='link'>

        <div className='CardAnunt'>
            <img src={item.img} alt="" />
            <div className="info">
                <div className="utilizator">
                    <img src={item.imgprofil} alt="" />
                    <span>{item.utilizator}</span>
                </div>
                <p>{item.descriere}</p>
                <div className="rating">
                    <img src="./imagini/rating.png" alt="" />
                    <span>{item.rating}</span>
                </div>
            </div>
            <hr />
            <div className="detalii">
                <img src="./imagini/favorite.png" alt="favorit" />
                <div className="pret">
                <span>De La</span>
                <h2>{item.pret}</h2>
                </div>
            </div>
        </div>
        </Link>
    )
}

export default CardAnunt;