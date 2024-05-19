import React from 'react'
import "./Comenzi.scss"

const Comenzi = () => {

    const currentUser = {
        id: 1,
        utilizator: "Ionut Coste",
        vanzator: true
    };

    return (
        <div className='comenzi'>
            <div className="container">
                <div className="titlu">
                    <h1>Comenzi</h1>
                </div>
                <table>
                    <tr>
                        <th>Imagine</th>
                        <th>Titlu</th>
                        <th>Pret</th>
                        <th>{currentUser?.isSeller ? "Cumparator" : "Vanzator"}</th>
                        <th>Contact</th>
                    </tr>

                    <tr>
                        <td>
                            <img src="/imagini/gestanunt.jpg" alt="cod" className='img' />
                        </td>
                        <td>Anunt 1</td>
                        <td>1200 Lei</td>
                        <td>12</td>
                        <td>
                                <img src="/imagini/chat.png" alt="cos de gunoi" className='butoane' />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <img src="/imagini/gestanunt.jpg" alt="cod" className='img' />
                        </td>
                        <td>Anunt 1</td>
                        <td>1200 Lei</td>
                        <td>12</td>
                        <td>
                                <img src="/imagini/chat.png" alt="cos de gunoi" className='butoane' />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <img src="/imagini/gestanunt.jpg" alt="cod" className='img' />
                        </td>
                        <td>Anunt 1</td>
                        <td>1200 Lei</td>
                        <td>12</td>
                        <td>
                                <img src="/imagini/chat.png" alt="cos de gunoi" className='butoane' />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <img src="/imagini/gestanunt.jpg" alt="cod" className='img' />
                        </td>
                        <td>Anunt 1</td>
                        <td>1200 Lei</td>
                        <td>12</td>
                        <td>
                                <img src="/imagini/chat.png" alt="cos de gunoi" className='butoane' />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <img src="/imagini/gestanunt.jpg" alt="cod" className='img' />
                        </td>
                        <td>Anunt 1</td>
                        <td>1200 Lei</td>
                        <td>12</td>
                        <td>
                                <img src="/imagini/chat.png" alt="cos de gunoi" className='butoane' />
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Comenzi