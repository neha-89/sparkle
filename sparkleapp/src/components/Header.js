import React, { Component } from 'react';

class Header extends Component(){
    render(){
        return(
            
             <header>
         {/* <!-- <nav class="navbar navbar-expand-lg fixed-top"> --> */}
              <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                  <a className="navbar-brand" href="#">Sparkle Beauty Zone</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Services</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Offers</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                      </li>
                    </ul>
                  </div>
                  <ul className="d-flex">
                      {/* <!-- <li>Book an appointment</li> --> */}
                    <li><a href="#"><i className="bi bi-box-arrow-in-right"></i> Login</a></li>
                    <li><a href="#"><i className="bi bi-person-plus"></i> SignUp</a></li>
                    {/* <li><a onclick="darkmode()" id="Knop"> 
                       <span className="sun-icon">
                          <i className="bi bi-sun-fill" id="zon" style="color:#ffde08;"></i>
                       </span>
                        <span class="moon-icon">
                          <i class="bi bi-moon-fill" id="maan" style="color:#0c3cfa;"></i>
                       </span>
                      </a></li>
                    <!-- <li><button class="btn btn-outline-light btn-rounded mode" onclick="changeMode()">SwitchMode</button></li> --> */}
                  </ul>
                 </div>
                </nav>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
              <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="10000">
                    <img src="https://i.ibb.co/hZj5173/engin-akyurt-g-m8-EDc4-X6-Q-unsplash.jpg" className="item" alt="..."/>
                  </div>
                  <div className="carousel-item"  data-bs-interval="2000">
                    <img src="https://i.ibb.co/zJg8kTH/teahub-io-fashion-wallpaper-hd-736214.jpg" className="item" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="https://i.ibb.co/xhNykKN/Wallpaperkiss-1212798.jpg" class="item" alt="..."/>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
            </div>
         
        </header>
        
            
        )
    }
}

export default Header;
     
       
       