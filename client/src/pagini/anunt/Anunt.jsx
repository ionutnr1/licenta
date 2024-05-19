import React from 'react'
import "./Anunt.scss"
import { Slider } from 'infinite-react-carousel'
import "./Anunt.scss"

const Anunt = () => {
    return (
        <div className='anunt'>
            <div className="container">
                <div className="stanga">
                    <span className='Cale'>ServUP {'>'} IT</span>
                    <h1>Web developer cu experienta in domeniu de peste 5 ani.</h1>
                    <div className="utilizator">
                        <img src="/imagini/imgprofil.png" alt="profil" className='profil' />
                        <span>Rares Pop</span>
                        <div className="rating">
                            <img src="/imagini/rating.png" alt="" />
                            <img src="/imagini/rating.png" alt="" />
                            <img src="/imagini/rating.png" alt="" />
                            <img src="/imagini/rating.png" alt="" />
                            <span>4</span>
                        </div>
                    </div>
                    <Slider className="slider">
                        <img src="https://www.growthzone.com/wp-content/uploads/2020/07/GrowthZone-Website-Examples.png" alt="" />
                        <img src="https://www.yourmembership.com/wp-content/uploads/2023/06/ym-web-design-services-responsive-mockup-tiny.png" alt="" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzhJB1Y6VP7niy8o6M1HM3ElVvqpBdm5RvS1GZ6eGhoiWjrQUMn-UezYv0AO-XNNkEH6s&usqp=CAU" alt="" />
                        <img src="https://www.webfx.com/wp-content/uploads/2023/10/example-of-beautiful-websites-2-slack.png" alt="" />
                    </Slider>
                    <h2>Cum te pot ajuta...</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus molestias quos neque ullam voluptas nihil. Maiores fuga sit quaerat, non, illum id adipisci voluptas vel neque necessitatibus ad commodi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti qui iusto officiis, nihil repudiandae, soluta laboriosam autem nostrum impedit maiores in. Hic ullam veniam consequatur ab aliquid illum eveniet voluptas! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, repellat. Consectetur repudiandae iste aliquam doloremque blanditiis tempora? Ab laudantium aliquid vitae distinctio quisquam incidunt praesentium porro, ea excepturi in temporibus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit qui enim, obcaecati molestias adipisci facilis aspernatur nam. Harum laudantium voluptate nam accusamus reiciendis porro. Quaerat vitae a fugit molestiae quo? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium beatae omnis tempora cumque quisquam facilis quae voluptate, sapiente impedit quis veritatis assumenda fugit dolorem ipsam illo maxime sit nulla cupiditate.
                    </p>
                    <div className="vanzator">
                        <h2>Despre</h2>
                        <div className="utilizator">
                            <img src="/imagini/imgprofil.png" alt="" />
                            <div className="detalii">
                                <span>Rares Pop</span>
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
                                <span className="desc">Romana</span>
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nihil, consectetur esse provident eaque nisi facere ut deleniti, enim magnam aperiam natus distinctio assumenda voluptas nostrum officia veniam. Libero, quo?</p>
                    </div>
                </div>
            </div>
            <div className="dreapta">
                <div className="pret">
                    <h3>Creare site web</h3>
                    <h2>1200 LEI</h2>
                </div>
                <p>Realizarea site-ului folosind React, MongoDB si NodeJS</p>
                <hr />
                <div className="info">
                    <div className="item">
                        <img src="/imagini/timp.png" alt="" />
                            <span>1 saptamana</span>
                    </div>
                
                    <div className="item">
                        <img src="/imagini/guarantee.png" alt="" />
                        <span>Mentenanta lunara nu este inclusa in pret</span>
                    </div>
                </div>
                <div className="continut">
                    <div className="item">
                            <img src="/imagini/mark.png" alt="" />
                        <span>Creare baza de date</span>
                    </div>

                    <div className="item">
                            <img src="/imagini/mark.png" alt="" />
                        <span>Dezvoltare FrontEnd</span>
                    </div>

                    <div className="item">
                        <img src="/imagini/mark.png" alt="" />
                        <span>Dezvoltare BackEnd</span>
                    </div>
                </div>

                <button>Cumpara</button>
            </div>
            </div>
        </div>
    )
}

export default Anunt;