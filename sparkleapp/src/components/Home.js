import React from 'react';

export default function Home(){
    return(
        <>
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active" data-bs-interval="10000">
                    <img src="https://i.ibb.co/hZj5173/engin-akyurt-g-m8-EDc4-X6-Q-unsplash.jpg" class="item" alt="..."/>
                  </div>
                  <div class="carousel-item"  data-bs-interval="2000">
                    <img src="https://i.ibb.co/zJg8kTH/teahub-io-fashion-wallpaper-hd-736214.jpg" class="item" alt="..."/>
                  </div>
                  <div class="carousel-item">
                    <img src="https://i.ibb.co/xhNykKN/Wallpaperkiss-1212798.jpg" class="item" alt="..."/>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
       <div class="container">
            <h2>Recommended Services</h2>
            <p class="card-text">Our runway experts have curated some of the most popular services at Lakmé Salon,
            just for you. Take your pick and head to your nearest salon and get started on your makeover!</p>
          <div class="row">
                <div class="col-md-3">
                  <div class="card" >
                    <img src="https://i.ibb.co/WzwJF2c/img.jpg" alt="img"class="card-img-top r-serv"/>
                    <div class="card-body r-servtext  shadow p-3 mb-5 ">
                      <span>Pedicure & Menicure</span>
                    </div>
                  </div>
                </div> 
                <div class="col-md-3">
                  <div class="card " >
                    <img src="https://i.ibb.co/WzwJF2c/img.jpg" alt="img"class="card-img-top r-serv"/>
                    <div class="card-body r-servtext shadow p-3 mb-5">
                      <span>Hair Spa</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="card " >
                    <img src="https://i.ibb.co/WzwJF2c/img.jpg" alt="img" class="card-img-top r-serv"/>
                    <div class="card-body r-servtext  shadow p-3 mb-5">
                      <span>Fruit Facial</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="card" >
                    <img src="https://i.ibb.co/WzwJF2c/img.jpg" alt="img" class="card-img-top r-serv" />
                    <div class="card-body r-servtext  shadow p-3 mb-5">
                      <span>Daily Glam Makeup</span>
                    </div>
                  </div>
                </div>
            </div>
        </div>
       <div class="container-fluid testimonial">
        <h2>Testimonials</h2>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner sal-slider1">
            <div class="carousel-item active s-item">
              <p>"mdhgjfghdffghfjg"</p>
              <h6>-ghgjhkjhk</h6>
            </div>
            <div class="carousel-item s-item">
              <p>"mdhgjfghdffghfjg"</p>
              <h6>-ghgjhkjhk</h6>
            </div>
            <div class="carousel-item s-item">
              <p>"mdhgjfghdffghfjg"</p>
              <h6>-ghgjhkjhk</h6>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
       </div>
       <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="https://i.ibb.co/86nHqyh/bridal.jpg" alt="bridal" class="bridal" />
          </div>
          <div class="col-md-8">
            <div class="card-body title">
              <h2 class="card-title ">The Bridal Look</h2>
              <p class="card-text b-text">
                The Uff Teri Ada look from our Blockbuster Brides collection is designed for the coy bride whose excitement at her sangeet is palpable but measured. She is a vision of pure radiance as she prepares to embark on this new journey in her life. 

            The shades of mint green that this stunning bride adorns befits her strong sense of individuality and independence.
            
            Check out our complete Blockbuster Bridal Collection.
              </p>
             
            </div>
          </div>
        </div>
      </div>
        </>
    )
} 