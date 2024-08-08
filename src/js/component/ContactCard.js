import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";

export const ContactCard = () => {
    return (
        <div className="container contact-card">
            <div className="row">
                <div className="col-3">
                    <img src="https://images.pexels.com/photos/96918/pexels-photo-96918.jpeg?cs=srgb&dl=flora-flores-fondo-de-pantalla-hd-96918.jpg&fm=jpg"
                        className="rounded-circle" />
                </div>
                <div className="col-9">
                    <div className="d-flex name">
                        <div>
                            <h4>Nombre contacto</h4>
                        </div>
                        <div className="ms-auto me-2">
                            <span><i class="fa-solid fa-user-pen me-4"></i><i class="fa-solid fa-user-minus"></i></span>
                        </div>
                    </div>
                    <div class="d-flex flex-column info">
                        <div class="p-1">
                            <i class="fa-solid fa-location-crosshairs"></i>
                            <span className="ms-3">Aquí va la dirección</span>
                        </div>
                        <div class="p-1">
                            <i class="fa-solid fa-mobile-screen-button"></i>
                            <span className="ms-3">Aquí va el teléfono</span>
                        </div>
                        <div class="p-1">
                            <i class="fa-solid fa-envelope-open-text"></i>
                            <span className="ms-3">Aquí va el email</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
