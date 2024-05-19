import React from 'react'
import "./Mesaje.scss"
import { Link } from 'react-router-dom';

const Mesaje = () => {

    const currentUser = {
        id: 1,
        utilizator: "Ionut Coste",
        vanzator: true
    };

    const mesaj = "Crezi ca ma poti ajuta cu site-ul de care am eu nevoie? As avea nevoie de el in cel mai scurt timp posibil, vreau sa dau drumul la treaba."

    return (
        <div className='mesaje'>
            <div className="container">
                <div className="titlu">
                    <h1>Mesaje</h1>
                </div>
                <table>
                    <tr>
                        <th>Cumparator</th>
                        <th>Ultimul mesaj</th>
                        <th>Data</th>
                        <th>Actiune</th>
                    </tr>

                    <tr className='activ'>
                        <td>
                            Cumparator 1
                        </td>
                        <td><Link to='/mesajpriv/1' className='link'>{mesaj.substring(0,30)}...</Link></td>
                        <td>Acum o saptamana</td>
                        <td><button>Marcheaza ca citit</button></td>
                    </tr>

                    <tr className='activ'>
                        <td>
                            Cumparator 1
                        </td>
                        <td><Link to='/mesajpriv/1' className='link'>{mesaj.substring(0,30)}...</Link></td>
                        <td>Acum o saptamana</td>
                        <td><button>Marcheaza ca citit</button></td>
                    </tr>

                    <tr>
                        <td>
                            Cumparator 1
                        </td>
                        <td><Link to='/mesajpriv/1' className='link'>{mesaj.substring(0,30)}...</Link></td>
                        <td>Acum o saptamana</td>
                    </tr>

                    <tr>
                        <td>
                            Cumparator 1
                        </td>
                        <td><Link to='/mesajpriv/1' className='link'>{mesaj.substring(0, 30)}...</Link></td>
                        <td>Acum o saptamana</td>
                    </tr>
                    
                </table>
            </div>
        </div>
    )
}

export default Mesaje