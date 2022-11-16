import React from "react";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();

  const navigate = (path) => {
    history.push(path);
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top backdrop"
      data-navbar-on-scroll="data-navbar-on-scroll"
    >
      <div className="container">
        <a
          className="navbar-brand d-flex align-items-center fw-bolder fst-italic"
          href="/"
        >
          <div className="text-info">INSO</div>
          <div className="text-warning">DEV</div>
        </a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item px-2">
              <a className="nav-link fw-medium" href="/job">
                Offres de travail
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link fw-medium" href="#contact">
                Contacts
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link fw-medium" href="/login">
                <button className="btn btn-outline-primary rounded-2 order-0">
                  Login
                </button>
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link fw-medium" href="/signup">
                <button className="btn btn-outline-primary rounded-2 order-0">
                  Signup
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
