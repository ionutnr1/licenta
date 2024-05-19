import React from 'react'
import "./Anuntadm.scss"
import { Link } from 'react-router-dom'

const Anuntadm = () => {
    return (
        <div className='anunt-admin'>
            <div className="container">
                <div className="titlu">
                    <h1>Anunturile mele</h1>
                    <Link to="/addanunt"><button>Adauga anunt</button></Link>
                </div>
                <table>
                    <tr>
                        <th>Imagine</th>
                        <th>Titlu</th>
                        <th>Pret</th>
                        <th>Comenzi</th>
                        <th>Actiune</th>
                    </tr>

                    <tr>
                        <td>
                            <img src="/imagini/gestanunt.jpg" alt="cod" className='img' />
                        </td>
                        <td>Anunt 1</td>
                        <td>1200 Lei</td>
                        <td>12</td>
                        <td>
                            <button>
                                <img src="/imagini/sterge.png" alt="cos de gunoi" className='butoane' />
                            </button>
                            <button>
                                <img src="/imagini/update.png" alt="cos de gunoi" className='butoane' />
                            </button>
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
                            <button>
                                <img src="/imagini/sterge.png" alt="cos de gunoi" className='butoane' />
                            </button>
                            <button>
                                <img src="/imagini/update.png" alt="cos de gunoi" className='butoane' />
                            </button>
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
                            <button>
                                <img src="/imagini/sterge.png" alt="cos de gunoi" className='butoane' />
                            </button>
                            <button>
                                <img src="/imagini/update.png" alt="cos de gunoi" className='butoane' />
                            </button>
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
                            <button>
                                <img src="/imagini/sterge.png" alt="cos de gunoi" className='butoane' />
                            </button>
                            <button>
                                <img src="/imagini/update.png" alt="cos de gunoi" className='butoane' />
                            </button>
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
                            <button>
                                <img src="/imagini/sterge.png" alt="cos de gunoi" className='butoane' />
                            </button>
                            <button>
                                <img src="/imagini/update.png" alt="cos de gunoi" className='butoane' />
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Anuntadm