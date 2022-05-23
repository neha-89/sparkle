import React from 'react';

export default function Footer(){
    return(
        <>
         
        <footer className="footer text-white">
        
          <div className="container p-4">
           
            <div className="row">
            
              <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                <h5 classNAme="text-uppercase">About Us</h5>
      
                <p className="f-para">  
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                  molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                  aliquam voluptatem veniam, est atque cumque eum delectus sint!
                </p>
              </div>
             
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase f-title">Find Us</h5>
      
                <div className="container p-4 pb-0">
                
                  <section className="mb-4">
                 
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                      ><i class="bi bi-facebook"></i
                    ></a>
                   
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                      ><i className="bi bi-whatsapp"></i
                    ></a>
              
                  
              
                 
                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                      ><i class="bi bi-instagram"></i
                    ></a>
              
                 
                  </section>
                 
                </div>
              </div>
             
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              
      
                <ul className="list-unstyled text-decoration-none">
                  <li>
                    <a href="#!" className="text-white text-decoration-none"> <h5 className="text-uppercase mb-0">Careers</h5></a>
                  </li>
                  {/* <!-- <li>
                    <a href="#!" className="text-white">Link 2</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Link 3</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Link 4</a>
                  </li> --> */}
                </ul>
              </div>
             
            </div>
          
          </div>
        
      
       
          <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
            © 2020 Copyright:
            <a class="text-white" href="#">Sparkle.com</a>
          </div>
        
        </footer>
  

        </>
    )
}
