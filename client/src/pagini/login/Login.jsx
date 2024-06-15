import React, { useState } from 'react'
import "./Login.scss"
import {useNavigate} from "react-router-dom"
import requestNou from "../../utils/requestNou"


function Login() {
    const [utilizator, setUtilizator] = useState("");
    const [parola, setParola] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault()
        try{

         const res = await requestNou.post("autentificare/conectare", {utilizator, parola});
         localStorage.setItem("currentUser", JSON.stringify(res.data));
         navigate("/")
        }catch(err){

            setError(err.response.data);
            
        /*    if (err.message && err.message.data) {
                setError(err.message.data);
        } else{
                console.error(err);
                setError(err.toString());
            }
                */
    }
    };

    return (
        <div className='login'>
            <form onSubmit={handleSubmit}>
                <h1>Conectare</h1>
                <label htmlFor="">Utilizator</label>
                <input type="text" name='utilizator' placeholder='Utilizator' onChange={(e)=>setUtilizator(e.target.value)} />
                <label htmlFor="">Parola</label>
                <input type="password" name='parola' placeholder='Parola' onChange={(e) => setParola(e.target.value)} />
                <button type='submit'>Logare</button>
                {error && error.message}
            </form>
        </div>
    );
}

export default Login;