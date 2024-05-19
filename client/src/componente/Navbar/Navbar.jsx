import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

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

    const currentUser = {
        id: 1,
        utilizator: "Ionut Coste",
        vanzator: true
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
                    <span>Descopera</span>
                    {!currentUser?.vanzator && <span>Vinde servicii</span>}
                    <span>Sign In</span>
                    {!currentUser && <button>Alatura-te!</button>}
                    {currentUser && (
                        <div className="utilizator" onClick={() => setOpen(!open)}>
                            <img src="https://cdn-icons-png.flaticon.com/128/2102/2102647.png" alt="" />
                            <span>{currentUser?.utilizator}</span>
                            {open && (
                                <div className="optiuni">
                                    {currentUser?.vanzator && (
                                        <>
                                            <Link to={"/anuntadm"} className="link">Anunturi</Link>
                                            <Link to={"/addanunt"} className="link">Adauga Anunt</Link>
                                        </>
                                    )}
                                    <Link to={"/comenzi"} className="link">Comenzi</Link>
                                    <Link to={"/mesaje"} className="link">Mesaje</Link>
                                    <Link to={"/"} className="link">Delogare</Link>
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
