import React, { useContext, useEffect } from "react";
import { Context } from "./../store/appContext";
import { Link, useParams } from "react-router-dom";
import "../../styles/index.css";

export const ContactCard = ({ name, address, phone, email, id }) => {

    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.getAllContacts()
    }, [])

    // const handleDeleteContact = (contactId) => {
    //     actions.deleteContact(contactId)
    // }

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
                                <i className="fa-solid fa-user-minus"
                                onClick={() => {
                                    actions.deleteContact(id)
                                }}
                                // data-bs-toggle="modal" data-bs-target="#exampleModal"
                                ></i></span>
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
            {/* <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" 
            aria-hidden="true" style={{borderRadius: '15px'}}>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5 name" id="exampleModalLabel">Delete contact?</h1>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<span>Do you want to delete {name} contact?</span>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
							<button type="button" className="btn btn-outline-info"
								onClick={() => {
									handleDeleteContact()
								}}
								data-bs-dismiss="modal">Delete</button>
						</div>
					</div>
				</div>
			</div> */}
        </div>
    );
};
