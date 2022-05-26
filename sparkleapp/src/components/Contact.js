import React from 'react';

export default function Contact(){
    return(
       
        <div className="container">
            <h2>Contact Us</h2>
            <div id="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.565703011316!2d73.7975743269531!3d18.593608499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b91f89c063eb%3A0x712619c21232838f!2sSPARKEL%20BEAUTY%20ZONE!5e0!3m2!1sen!2sin!4v1647507992378!5m2!1sen!2sin" width="1036" height="400" allowfullscreen="" loading="lazy"></iframe>
            </div>
            <form id="contact">
               
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Anil Kumar" />
                    <label for="floatingInput">Full Name</label>
                  </div>
              
             
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email address</label>
                  </div>
              
              
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    <label for="floatingTextarea">Message</label>
                  </div>
              
  
              
                <button type="submit" id="send" className="btn btn-primary btn-block mb-4">Send</button>
              </form>
             
      </div>
      
    )
} 