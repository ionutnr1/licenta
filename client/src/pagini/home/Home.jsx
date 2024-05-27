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
                    <h1>Descriere.</h1>
                        <h2>Aplicația noastră este o platformă dedicată micilor firme și persoanelor fizice autorizate (PFA-uri) care doresc să își promoveze serviciile și să atragă clienți noi. Prin intermediul aplicației, utilizatorii pot posta anunțuri detaliate despre serviciile oferite, inclusiv informații despre prețuri, disponibilitate și recenzii de la clienți anteriori. De asemenea, clienții pot căuta și compara oferte de servicii într-un mod eficient și intuitiv, având la dispoziție filtre și categorii specifice care să îi ajute să găsească exact ceea ce caută.</h2>
                    <h1>Descriere.</h1>
                        <h2>Motivația din spatele creării acestei aplicații este de a sprijini micile afaceri și PFA-urile, oferindu-le un instrument accesibil și eficient pentru a-și promova serviciile într-un mediu digital din ce în ce mai competitiv. În contextul în care mediul online devine tot mai important pentru atragerea clienților, ne-am dorit să creăm o platformă care să faciliteze interacțiunea între furnizorii de servicii și potențialii clienți.</h2>
                </div>
    

                   
                <div className="coloana2">
                <img src="/imagini/businessgrow.png" alt="grow" />
                </div>
                </div>
        </div>
    )
}

export default Home