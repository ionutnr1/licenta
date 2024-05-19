import React, { useState } from "react"
import "./Anunturi.scss"
import {anunturi} from "../../data"
import CardAnunt from "../../componente/CardAnunt/CardAnunt"

const Anunturi = () => {

    const [open, setOpen] = useState(false);
    const [sort, setSort] = useState("vanzari");

    const reSort = (type) => {
        setSort(type)
        setOpen(false)
    }
    return (
        <div className='anunturi'>
            <div className="container">
                <span className='cale'>ServUP {">"} IT {">"}</span>
                <h1>Web Developer</h1>
                <p>
                    Descopera cel mai potrivit web developer pentru a-ti trece afacerea la nivelul urmator.
                </p>
                <div className="meniu">
                    <div className="stanga">
                        <span>Pret:</span>
                        <input type="text" placeholder='De la' />
                        <input type="text" placeholder='Pana la' />
                        <button>Cauta</button>
                    </div>
                    <div className="dreapta">
                        <span className='sorteaza'>Sorteaza dupa</span>
                        <span className='dupa'>{sort=== "vanzari" ? "Cele mai vandute" : "Cele mai noi"}</span>
                        <img src="./imagini/sageata.png" alt="sageata" onClick={()=>setOpen(!open)} />
                        {open &&(
                            <div className="dropdown">
                            {sort ==="vanzari" ? (

                                <span onClick={()=>reSort("timp")}>Cele mai noi</span>
                            ):(
                                <span onClick={() => reSort("vanzari")}>Cele mai vandute</span>
                                )
                                // <span onClick={() => reSort("ieftin")}>Pret crescator</span>
                                // <span onClick={() => reSort("scump")}>Pret descrescator</span>
                            }
                                </div>    
                            )}
                    </div>
                </div>
                <hr />
                <div className="panouri">
                    {anunturi.map(anunt=>(
                        <CardAnunt key={anunt.id} item={anunt}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Anunturi;