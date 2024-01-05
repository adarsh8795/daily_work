import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import heart from '../images/heart.svg';
import profile from '../images/profile.svg';
import search from '../images/search-normal.svg';
import bag from '../images/shopping-bag.svg';

const Navbar = () => {
    const state = useSelector(state => state.handleCart)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2 " to="/"> LOGO </NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Shop </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">Skills</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">Stories</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul> */}
                    <div className="buttons text-center">
                        <img src={search} alt="error" style={{ marginRight: '10px' }}/>
                        <img src={heart} alt="error" style={{ marginRight: '10px' }}/>
                        <img src={bag} alt="error" style={{ marginRight: '10px' }}/>
                        <img src={profile} alt="error"style={{ marginRight: '10px' }} />
                    </div>
                {/* </div> */}


            </div>
        </nav>
    )
}

export default Navbar