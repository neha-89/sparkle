import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import Footer from './footer';

const Header =(props)=>{
    
        return(
            <>
             <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                  <a className="navbar-brand" href="#">Sparkle Beauty Zone</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                          <Link to ="/home">Home</Link>
                        {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                      </li>
                      <li className="nav-item">
                          <Link to='/services' >Services</Link>
                        {/* <a className="nav-link" href="#">Services</a> */}
                      </li>
                      {/* <li className="nav-item">
                      <Link to='/services' >Offers</Link> */}
                        {/* <a className="nav-link" href="#">Offers</a> */}
                      {/* </li> */}
                      <li className="nav-item">
                      <Link to='/contact' >Contact</Link>
                        {/* <a className="nav-link" href="#">Contact</a> */}
                      </li>
                    </ul>
                  </div>
                  <ul className="d-flex">
                      {/* <!-- <li>Book an appointment</li> --> */}
                    <li><a href="#"><i class="bi bi-box-arrow-in-right"></i> Login</a></li>
                    <li><a href="#"><i class="bi bi-person-plus"></i> SignUp</a></li>
                    {/* <li><a onclick="darkmode()" id="Knop"> 
                       <span class="sun-icon">
                          <i class="bi bi-sun-fill" id="zon" style="color:#ffde08;"></i>
                       </span>
                        <span class="moon-icon">
                          <i class="bi bi-moon-fill" id="maan" style="color:#0c3cfa;"></i>
                       </span>
                      </a></li> */}
                    {/* <!-- <li><button className="btn btn-outline-light btn-rounded mode" onclick="changeMode()">SwitchMode</button></li> --> */}
                  </ul>
                 </div>
                </nav>
                <Outlet />
                <Footer />
               
            </>
        )
    }

export default Header