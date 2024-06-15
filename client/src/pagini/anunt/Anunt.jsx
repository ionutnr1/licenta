import React from 'react'
import "./Anunt.scss"
import { Slider } from 'infinite-react-carousel'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import requestNou from '../../utils/requestNou'
import { Link } from 'react-router-dom'

const Anunt = () => {

const {id} = useParams()

    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ['anunt'],
        queryFn: () =>
            requestNou.get(`/anunturi/single/${id}`).then((res) => {
                return res.data;
            }),
    });

    const userId = data?.userId;

    const {
        isLoading: isLoadingUser,
        error: errorUser,
        data: dataUser,
    } = useQuery({
        queryKey: ["user"],
        queryFn: () =>
            requestNou.get(`/users/${userId}`).then((res) => {
                return res.data;
            }),
        enabled: !!userId,
    });

    return (
        <div className='anunt'>
            {isLoading?("loading") : error ? ("Ceva nu a functionat"):(
            <div className="container">
                <div className="stanga">
                    <span className='Cale'>ServUP {'>'} IT</span>
                    <h1>{data.title}</h1>
                    {isLoadingUser ? ("loading") : errorUser ? ("Ceva nu a functionat") : (
                        <div className="utilizator">
                        <img src={dataUser.imagini || "/imagini/avatar.jpg"} alt="profil" className='profil' />
                        <span>{dataUser.utilizator}</span>
                        <div className="rating">
                            <img src="/imagini/rating.png" alt="" />
                            <img src="/imagini/rating.png" alt="" />
                            <img src="/imagini/rating.png" alt="" />
                            <img src="/imagini/rating.png" alt="" />
                            <span>{data.rating}</span>
                        </div>
                    </div>
                    )}
                    <Slider className="slider">
                        {data.imagini.map((img)=>(
                            <img key={img} src={img} alt=''/>
                        ))}
                    </Slider>
                    <h2>Cum te pot ajuta...</h2>
                    <p>
                        {data.descriere}
                    </p>
                    <div className="vanzator">
                        <h2>Despre</h2>
                        <div className="utilizator">
                            <img src={dataUser.imagini || "/imagini/avatar.png"} alt="" />
                            <div className="detalii">
                                <span>{dataUser.utilizator}</span>
                                <div className="rating">
                                    <img src="/imagini/rating.png" alt="" />
                                    <img src="/imagini/rating.png" alt="" />
                                    <img src="/imagini/rating.png" alt="" />
                                    <img src="/imagini/rating.png" alt="" />
                                    <span>4</span>
                            </div>
                            <button>Contacteaza-ma</button>
                        </div>
                    </div>
                    <div className="caseta">
                        <div className="descriere">
                            <div className="element">
                                <span className="titlu">Origine</span>
                                <span className="desc">{dataUser.adresa}</span>
                            </div>
                                <div className="element">
                                    <span className="titlu">Membru din:</span>
                                    <span className="desc">2011</span>
                                </div>
                                <div className="element">
                                    <span className="titlu">Limbi vorbite</span>
                                    <span className="desc">Romana, Engleza, Franceza</span>
                                </div>
                                <div className="element">
                                    <span className="titlu">Experienta</span>
                                    <span className="desc">4 ani, 7 luni</span>
                                </div>
                                <div className="element">
                                    <span className="titlu">Proiecte finalizate</span>
                                    <span className="desc">47</span>
                                </div>
                        </div>
                        <hr />
                        <p>{dataUser.descriere}</p>
                    </div>
                </div>
            </div>
            <div className="dreapta">
                <div className="pret">
                    <h3>{data.subTitlu}</h3>
                    <h2>{data.pret}</h2>
                </div>
                <p>{data.miniDescriere}</p>
                <hr />
                <div className="info">
                    <div className="item">
                        <img src="/imagini/timp.png" alt="" />
                            <span>{data.timpEstimat} Durata</span>
                    </div>
                
                    <div className="item">
                        <img src="/imagini/guarantee.png" alt="" />
                        <span>Mentenanta lunara nu este inclusa in pret</span>
                    </div>
                </div>
                <div className="continut">
                    {data.beneficii.map((beneficiu) =>(
                    <div className="item" key={beneficiu}>
                        <img src="/imagini/mark.png" alt="" />
                        <span>{beneficiu}</span>
                    </div>
                ))}

                    <div className="item">
                            <img src="/imagini/mark.png" alt="" />
                        <span>Dezvoltare FrontEnd</span>
                    </div>

                    <div className="item">
                        <img src="/imagini/mark.png" alt="" />
                        <span>Dezvoltare BackEnd</span>
                    </div>
                </div>
                <Link to={`/plata/${id}`}>
                <button>Cumpara</button>
                </Link>
                </div>
            </div>
        )}
        </div>
    )
}

export default Anunt;