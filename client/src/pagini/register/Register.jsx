import React from 'react'
import "./Register.scss"
import upload from "../../utils/upload";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import requestNou from "../../utils/requestNou";

function Register() {
    const [file, setFile] = useState(null);
    const [utilizator, setUtilizator] = useState({
        utilizator: "",
        email: "",
        parola: "",
        img: "",
        tara: "",
        isVanzator: false,
        descriere: "",
    });

    
    const handleChange = (e) => {
        setUtilizator((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    
    const handleSeller = (e) => {
        setUtilizator((prev) => {
            return { ...prev, isVanzator: e.target.checked };
        });
    };
    
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const url = await upload(file);
        try {
            await requestNou.post("/autentificare/inregistrare", {
                ...utilizator,
                img: url,
            });
            navigate("/")
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="register">
            <form onSubmit={handleSubmit}>
                <div className="stanga">
                    <h1>Creaza-ti cont</h1>
                    <label htmlFor="">Utilizator</label>
                    <input
                        name="utilizator"
                        type="text"
                        placeholder="Mircea Dan"
                        onChange={handleChange}
                    />
                    <label htmlFor="">Email</label>
                    <input
                        name="email"
                        type="email"
                        placeholder="email"
                        onChange={handleChange}
                    />
                    <label htmlFor="">Parola</label>
                    <input name="parola" type="password" onChange={handleChange} />

                    <label htmlFor="">Poza de profil</label>
                    <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                    <label htmlFor="">Tara</label>
                    <input
                        name="tara"
                        type="text"
                        placeholder="Usa"
                        onChange={handleChange}
                    />
                    <button type="submit">Inregistrare</button>
                </div>
                <div className="dreapta">
                    <h1>Esti persoana juridica?</h1>
                    <div className="toggle">
                        <label htmlFor="">Activeaza contul de firma</label>
                        <label className="switch">
                            <input type="checkbox" onChange={handleSeller} />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <label htmlFor="">Numar de telefon</label>
                    <input
                        name="phone"
                        type="text"
                        placeholder="0751..."
                        onChange={handleChange}
                    />
                    <label htmlFor="">Descriere</label>
                    <textarea
                        placeholder="Prezinta-te in cateva randuri"
                        name="descriere"
                        id=""
                        cols="30"
                        rows="10"
                        onChange={handleChange}
                    ></textarea>
                </div>
            </form>
        </div>
    );
}

export default Register;