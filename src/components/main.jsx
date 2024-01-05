import React from "react";
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Home = () => {
  const state = useSelector(state => state.handleCart)
  return (
    <>
      {/* <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3"> */}
        {/* <div >       */}
        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
                    {/* <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item" >
                            <NavLink className="nav-link row" to="/">Shop </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link row" to="/product">Skills</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link row" to="/about">Stories</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link row" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link row" to="/contact">Contact</NavLink>
                        </li>
                    </ul> */}
                    <ul style={{ listStyleType: 'none', padding: '10px', display: 'flex', justifyContent: 'center' ,alignContent : "center"}}>
                        <li style={{ marginRight: '25px' }}><h4>SHOP</h4></li>
                        <li style={{ marginRight: '25px' }}><h4>SKILLS</h4></li>
                        <li style={{ marginRight: '25px' }}><h4>STORIES</h4></li>
                        <li style={{ marginRight: '25px' }}><h4>ABOUT</h4></li>
                        <li style={{ marginRight: '25px' }}><h4>CONTACT </h4></li>
                    </ul>
            {/* </div> */}
          {/* <img
            className="card-img img-fluid"
            src="./assets/main.png.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">New Season Arrivals</h5>
              <p className="card-text fs-5 d-none d-sm-block ">
                Discover your products
              </p> */}
            {/* </div>
          </div> */}
        {/* </div>
      </div> */}
    </>
  );
};

export default Home;