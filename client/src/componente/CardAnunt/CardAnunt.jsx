import React from 'react'
import "./CardAnunt.scss"
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import requestNou from '../../utils/requestNou'


const CardAnunt = ({item}) => {

    const { isPending, error, data } = useQuery({
        queryKey: [`${item.userID}`],
        queryFn: () =>
            requestNou.get(`/users/4{item.userId}`).then((res) => {
                return res.data;
            }),
    });

    return (
        <Link to={`/anunt/${item._id}`} className='link'>

        <div className='CardAnunt'>
            <img src={item.coperta} alt="" />
            <div className="info">
                {isPending ?  "loading" : error ? "Ceva nu a functionat" : <div className="utilizator">
                    <img src={data.img || "/imagini/avatar.jpg"} alt="" />
                    <span>{data.utilizator}</span>
                </div>}
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