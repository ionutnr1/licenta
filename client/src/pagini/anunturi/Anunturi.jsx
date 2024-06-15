import React, { useState, useRef, useEffect } from "react"
import "./Anunturi.scss"
//import {anunturi} from "../../data"
import CardAnunt from "../../componente/CardAnunt/CardAnunt"
import requestNou from "../../utils/requestNou";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";


function Anunturi() {
    
    const [open, setOpen] = useState(false);
    const [sort, setSort] = useState("vanzari");
    const minRef = useRef();
    const maxRef = useRef();
    const {search} =useLocation();

    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ['anunturi'],
        queryFn: () => {
            // Construiește URL-ul cu parametri
            const params = new URLSearchParams(search);
            if (minRef.current.value) {
                params.append('min', minRef.current.value);
            }
            if (maxRef.current.value) {
                params.append('max', maxRef.current.value);
            }
            params.append('sort', sort);

            // Construiește URL-ul complet
            const url = `/anunturi?${params.toString()}`;
            return requestNou.get(url).then((res) => {
                return res.data;
            });
        },
    });


        console.log(data)

    const reSort = (type) => {
        setSort(type)
        setOpen(false)
    };
    useEffect(() => {
        refetch();
    }, [sort]);

    const apply = () => {
        refetch();
    };
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
                        <input ref={minRef} type="number" placeholder='De la' />
                        <input ref={maxRef} type="number" placeholder='Pana la' />
                        <button onClick={apply}>Cauta</button>
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
                    {isLoading ? "loading" : error ? "Ceva nu a functionat" : data.map(anunt=>(
                        <CardAnunt key={anunt._id} item={anunt}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Anunturi;