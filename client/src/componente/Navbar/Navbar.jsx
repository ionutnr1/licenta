import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import requestNou from "../../utils/requestNou";

const Navbar = () => {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(true);

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
            await requestNou.post("/autentificare/logout");
            localStorage.setItem("currentUser", null);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={active ? "navbar active" : "navbar"}>
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
                            <img src="https://cdn-icons-png.flaticon.com/128/2102/2102647.png" alt="" />
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

            <>
                <hr />
                <div className="meniu">
                    <Link to={"/"} className="link">Grupa1</Link>
                    <Link to={"/"} className="link">Grupa2</Link>
                    <Link to={"/"} className="link">Grupa3</Link>
                    <Link to={"/"} className="link">Grupa4</Link>
                </div>
            </>
        </div>
    );
};

export default Navbar;
