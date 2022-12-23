import React from "react";
import {Link, NavLink} from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <nav className="navbar navbar-expand-lg px-5 py-3">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="/"><img src="https://www.newbalance.com.ar/skin/frontend/sns_sport/newbalance/images/newbalance.svg" alt="" width={80}/></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" aria-current="page" to={"/category/hombre"}>Hombre</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to={"/category/mujer"}>Mujer</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to={"/category/niños"}>Niños</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to={"/category/lifestyle"}>Lifestyle</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to={"/category/running"}>Running</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to={"/category/holidays"}>Holidays</NavLink>
                                    </li>
                                </ul>
                                <div className="col-md-10 d-flex justify-content-end align-items-center">
                                    <CartWidget />
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

            </div>
        </div>
    )
}

export default NavBar;