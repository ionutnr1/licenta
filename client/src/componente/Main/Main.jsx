import React from "react";
import "./Main.scss"

const Main = () => {
    return (
        <div className="main" >
            <div className="container">
                <div className="stanga">
                    <h1>Descopera skilluri, Creeaza oportunitati, Impartaseste experiente! | ServUP </h1>
                    <div className="cautare">
                        <div className="casuta">
                            <img src="./imagini/lupa.png" alt="lupa de cautare" className="lupa"/>
                            <input type="text" placeholder="Cauta serviciul dorit" />
                        </div>
                    <button>Cauta!</button>
                    </div>
                </div>
                <div className="dreapta">
                    <img src="./imagini/mains.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Main;