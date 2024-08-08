import React from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/index.css";
import { NewContactNavbar } from "../component/NewContactNavbar";

export const EditContact = () => {

    const params = useParams();
    console.log(params);

    return (
        <React.Fragment>
            <NewContactNavbar />
            <div className="container new-contact">
                <form className="row g-3">
                    <div className="new-contact-title name text-center mb-4">
                        <h2>Edit Contact</h2>
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
                            value={params.id}
                        />
                    </div>
                    <div className="col-md-12 input">
                        <label htmlFor="inputEmail4" className="form-label">
                            Email
                        </label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="name@example.com" />
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
