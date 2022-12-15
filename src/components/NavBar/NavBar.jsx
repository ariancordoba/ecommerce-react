import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <nav className="navbar navbar-expand-lg px-5 py-3">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="page"><img src="https://www.newbalance.com.ar/skin/frontend/sns_sport/newbalance/images/newbalance.svg" alt="" width={80}/></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="page">Hombre</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="page">Mujer</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="page">Niños</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="page">Lifestyle</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="page">Running</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="page">Holidays</a>
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