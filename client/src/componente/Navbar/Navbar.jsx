import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link, useNavigate, useLocation } from "react-router-dom";
import requestNou from "../../utils/requestNou";

const Navbar = () => {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(true);
    const { pathname } = useLocation();

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", isActive);

        return () => {
            window.removeEventListener("scroll", isActive);
        };
    }, []);

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));


    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await requestNou.post("/autentificare/deconectare");
            localStorage.setItem("currentUser", null);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
            <div className="container">
                <div className="logo">
                    <Link to={"/"} className="link">
                    <span className="serv">Serv</span>
                    </Link>
                    <span className="up">UP</span>
                </div>
                <div className="linkuri">
                    <Link to={"/"} className="link">Descopera</Link>
                    {!currentUser?.isVanzator && <span>Vinde servicii</span>}
                    <Link to={"/login"} className="link">Log In</Link>
                    <Link to="/register" className="link"><button>Alatura-te!</button></Link>
                    {currentUser && (
                        <div className="utilizator" onClick={() => setOpen(!open)}>
                            <img src={currentUser?.img || "/imagini/avatar.jpg"} alt="" />
                            <span>{currentUser?.utilizator}</span>
                            {open && (
                                <div className="optiuni">
                                    {currentUser?.isVanzator && (
                                        <>
                                            <Link to={"/anuntadm"} className="link">Anunturi</Link>
                                            <Link to={"/addanunt"} className="link">Adauga Anunt</Link>
                                        </>
                                    )}
                                    <Link to={"/comenzi"} className="link">Comenzi</Link>
                                    <Link to={"/mesaje"} className="link">Mesaje</Link>
                                    <Link onClick={handleLogout} className="link">Delogare</Link>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

                    {(active || pathname !== "/") && (

                        <>
                <hr />
                <div className="meniu">
                    <Link to={"/"} className="link">Design Grafic</Link>
                    <Link to={"/"} className="link">Creare Website</Link>
                    <Link to={"/"} className="link">Editare Foto/Video</Link>
                    <Link to={"/"} className="link">Fotografie</Link>
                    <Link to={"/"} className="link">Consultanta</Link>
                    <Link to={"/"} className="link">Marketing</Link>
                    <Link to={"/"} className="link">Copywriting</Link>
                </div>
            </>
                    )}
        </div>
    );
};

export default Navbar;
