import React from 'react'
import "./Add.scss"

const Add = () => {
    return (
        <div className='adaugare'>
            <div className="container">
                <h1>Adauga un nou anunt</h1>
                <div className="split">
                    <div className="stanga">
                        <label htmlFor="">Titlu</label>
                        <input type="text" placeholder='ex: Voi crea cel mai potrivit site pentru afacerea ta...' />
                        <label htmlFor="">Categorie</label>
                        <select name="categorii" id="cat">
                            <option value="">Developer web</option>
                            <option value="">Psiholog</option>
                            <option value="">Hairstylist</option>
                            <option value="">Profesor</option>
                            <option value="">Make-up artist</option>
                        </select>
                        <label htmlFor="">Imagini</label>
                        <input type="file" multiple/>
                        <label htmlFor="">Descriere</label>
                        <textarea name="" id="" cols="30" rows="15" placeholder='Spune-ne cate ceva despre acest anunt...'></textarea>
                        <button>Adauga</button>
                    </div>
                    <div className="dreapta">
                        <label htmlFor="">Titlul serviciului</label>
                        <input type="text" placeholder='ex: Site de prezentare'/>
                        <label htmlFor="">Descrierea serviciului</label>
                        <textarea name="" id="" cols="20" rows="10" placeholder='O scurta descriere despre cum vei realiza acest serviciu'></textarea>
                        <label htmlFor="">Timpul executiei</label> 
                        <input type="number" min={1}/>
                        <label htmlFor="">Sercvicii suplimentare</label>
                        <input type="text" placeholder='Hostare' />
                        <input type="text" placeholder='Domeniu' />
                        <input type="text" placeholder='Mentenanta' />
                        <input type="text" placeholder='ex: Login/Register' />
                        <label htmlFor="">Pret</label>
                        <input type="number" min={1}/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Add;