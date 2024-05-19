import React from 'react'
import "./Mesajpriv.scss"
import { Link } from 'react-router-dom'

const Mesajpriv = () => {
    return (
        <div className='mesajpriv'>
            <div className="container">
                <span className="cale">
                    <Link to='/mesaje'>Mesaje</Link> {">"} Cumparator 1 {">"}
                </span>

                <div className="mesaje">
                    <div className="item">
                        <img src="/imagini/imgprofil.png" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sint iste voluptate porro aperiam quaerat repudiandae consequuntur, minima nemo est. Facere labore rerum ut eveniet cumque? Ut assumenda aperiam quisquam?</p>
                        
                    </div>

                    <div className="item eu">
                        <img src="/imagini/imgprofil.png" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sint iste voluptate porro aperiam quaerat repudiandae consequuntur, minima nemo est. Facere labore rerum ut eveniet cumque? Ut assumenda aperiam quisquam?</p>

                    </div>
                </div>
                <div className="scrie">
                    <textarea name="" id="" cols="30" rows="10" placeholder='Scrie mesajul tau aici...'></textarea>
                    <button>Trimite</button>
                </div>
            </div>
        </div>
    );
};

export default Mesajpriv;