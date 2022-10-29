import React from 'react'
import { useHistory } from 'react-router-dom'

const Navbar = () => {

    const history = useHistory()

    const navigate = path => {
        history.push(path)
    }

    return (

        <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3 backdrop" data-navbar-on-scroll="data-navbar-on-scroll">
            <div className="container"><a className="navbar-brand d-flex align-items-center fw-bolder fs-2 fst-italic" href="#">
                <div className="text-info">INSO</div>
                <div className="text-warning">DEV</div>
            </a>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                <div className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto pt-2 pt-lg-0">
                        <li className="nav-item px-2"><a className="nav-link fw-medium active" aria-current="page" href='/' >Home</a></li>
                        <li className="nav-item px-2"><a className="nav-link fw-medium" href='/job'>Offres de travail</a></li>
                        <li className="nav-item px-2"><a className="nav-link fw-medium" href='/contact'>Contacts</a></li>
                    </ul>
                    
                    <form className="ps-lg-5">
                        <button className="btn btn-lg btn-primary rounded-pill bg-gradient order-0" type="submit">Login</button>
                    </form>
                    
                </div>
            </div>
        </nav>


    )
}

export default Navbar