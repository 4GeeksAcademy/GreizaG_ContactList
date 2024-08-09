import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/index.css";
import { NewContactNavbar } from "../component/NewContactNavbar";

export const NewContact = () => {

    const navigate = useNavigate()
    const { store, actions } = useContext(Context);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        phone: "",
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }))
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        actions.addNewContact(formData);
        actions.getAllContacts();
        navigate("/")
    }

    // useEffect(() => {
    //     actions.getAllContacts();
    // }, [])

    return (
        <React.Fragment>
            <NewContactNavbar />
            <div className="container new-contact">
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="new-contact-title name text-center mb-4">
                        <h2>Add New Contact</h2>
                    </div>
                    <div className="col-12 input">
                        <label htmlFor="inputFullName" className="form-label">
                            Full Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputFullName"
                            placeholder="Full Name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-md-12 input">
                        <label htmlFor="inputEmail4" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="inputEmail4"
                            placeholder="name@example.com"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-12 input">
                        <label htmlFor="inputPhone" className="form-label">
                            Phone
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputPhone"
                            placeholder="Phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-12 input">
                        <label htmlFor="inputAddress" className="form-label">
                            Address
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputAddress"
                            placeholder="Apartment, studio, or floor"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="container d-flex col-12 justify-content-center input">
                        <button type="submit" className="btn">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
};
