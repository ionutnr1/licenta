import React from 'react'
import Main from '../../componente/Main/Main'
import './Home.scss'
import Categorii from '../../componente/Categorii/Categorii'

const Home = () => {
    return (
        <div className='home'>
        <Main/>
        <Categorii/>

        <div className="text-bar">
                <div className="coloana">
                    <h1>Dorinta noastra.</h1>
                    <div className="titlu">
                        -Conexiune-
                    </div>
                        <p>Facilitam conectarea între firme, persoane fizice și mici antreprenori, oferindu-le posibilitatea de a publica anunțuri pentru diverse servicii eficient si accesibil.</p>
                    <div className="titlu">
                        -Promovare-
                    </div>
                        <p>Sprijinim si promovam micii întreprinzători, oferindu-le o platformă accesibilă și eficientă pentru a-și promova serviciile și pentru a-și extinde prezența în piață.</p>
                    <div className="titlu">
                        -Eficienta-
                    </div>
                        <p>Alege persoana potrivita nevoilor tale fara sa fie nevoie de intalniri sau timp pierdut.</p>
                    <div className="titlu">
                        -Carefree-
                    </div>
                    <p>Stabileste un pret si plateste online fara alte griji si fara timp de asteptare.</p>
                </div>
    

                   
                <div className="coloana2">
                <img src="/imagini/businessgrow.png" alt="grow" />
                </div>
                </div>
        </div>
    )
}

export default Home