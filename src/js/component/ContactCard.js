import React, { useContext } from "react";
import { Context } from "./../store/appContext";
import { Link, useParams } from "react-router-dom";
import "../../styles/index.css";

export const ContactCard = ({ name, address, phone, email }) => {

    const { store, actions } = useContext(Context)


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
                            <h4>{name}</h4>
                        </div>
                        <div className="ms-auto me-2">
                            <span>
                                <Link className="edit-contact" to="/editcontact">
                                    <i className="fa-solid fa-user-pen me-4"></i>
                                </Link>
                                <i className="fa-solid fa-user-minus"></i></span>
                        </div>
                    </div>
                    <div className="d-flex flex-column info">
                        <div className="p-1">
                            <i className="fa-solid fa-location-crosshairs"></i>
                            <span className="ms-3">{address}</span>
                        </div>
                        <div className="p-1">
                            <i className="fa-solid fa-mobile-screen-button"></i>
                            <span className="ms-3">{phone}</span>
                        </div>
                        <div className="p-1">
                            <i className="fa-solid fa-envelope-open-text"></i>
                            <span className="ms-3">{email}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
