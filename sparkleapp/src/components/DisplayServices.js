import React from 'react';
import {Link} from 'react-router-dom';
 const DisplayServices =(props) =>{
    console.log(props);
    const listServices = ({serviceData}) =>{
        console.log(serviceData)
        if(serviceData){
            console.log(serviceData)
            return serviceData.map((item)=>{
                return (
                    <>
                    
                  
                    <Link to={`/listing/${item.service_id}`} key={item._id}>
                        <div className="card" >
                        <img src="https://i.ibb.co/WzwJF2c/img.jpg" alt="img"className="card-img-top r-serv"/>
                        <div className="card-body r-servtext  shadow p-3 mb-5 ">
                        <span>{item.servicename}</span>
                        </div>
                        </div>
                     
                    </Link>
                    </>
                )
                
            })
        }
    }
    return(
        <>
        <div className="container">
        <h2>Recommended Services</h2>
        <p className="card-text">Our runway experts have curated some of the most popular services at Lakmé Salon,
        just for you. Take your pick and head to your nearest salon and get started on your makeover!</p>
        <div className ="row  row-cols-4 ">
            <div className="col-md-3"></div>
        {listServices(props)}
           </div>
        </div>
         
            {/* <div className="col-md-3">
              <div className="card" >
                <img src="https://i.ibb.co/WzwJF2c/img.jpg" alt="img"className="card-img-top r-serv"/>
                <div className="card-body r-servtext  shadow p-3 mb-5 ">
                  <span>Pedicure & Menicure</span>
                </div>
              </div>
            </div> 
            <div className="col-md-3">
              <div className="card " >
                <img src="https://i.ibb.co/WzwJF2c/img.jpg" alt="img"className="card-img-top r-serv"/>
                <div className="card-body r-servtext shadow p-3 mb-5">
                  <span>Hair Spa</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card " >
                <img src="https://i.ibb.co/WzwJF2c/img.jpg" alt="img" className="card-img-top r-serv"/>
                <div className="card-body r-servtext  shadow p-3 mb-5">
                  <span>Fruit Facial</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card" >
                <img src="https://i.ibb.co/WzwJF2c/img.jpg" alt="img" className="card-img-top r-serv" />
                <div className="card-body r-servtext  shadow p-3 mb-5">
                  <span>Daily Glam Makeup</span>
                </div>
              </div>
            </div> */}
      
  
        </>
    )
}
export default DisplayServices;