import React from "react";
import { Link } from "react-router-dom";

const HeaderTop = () => {
    return(
        <div className="container_top">
            <div className="row">
                <div className="col">
                    <p className="row_info text-center align-middle">ENVÍO GRATIS A DESDE 7.999 | HASTA 12 CUOTAS</p>
                </div>
                <div className="col">
                    <p className="row_info text-center align-middle">
                            <p>MI CUENTA | MI LISTA DE DESEOS | INICIAR SESION</p>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop;