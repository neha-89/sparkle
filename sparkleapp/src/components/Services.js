import React,{useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import DisplayServices from './DisplayServices';



export default function Services(){
    
    const [service,setService] = useState([]);

    useEffect(()=>{
        fetch(('https://sparklenodeapi.herokuapp.com/api/getAll'))
        .then((res)=>res.json())
        .then((data)=>setService(data))
    },[])
  
    return(
        <>
          {/* <DisplayServices serviceData={service} /> */}
          <div className="container">
         <h2>Services</h2>
         <p className="card-text">Our runway experts have curated some of the most popular services at Lakmé Salon,
         just for you. Take your pick and head to your nearest salon and get started on your makeover!</p>
       <div className="row row-cols-1 row-cols-3 ">
       {service.map((item) => (
       
        <div className="col">
            <Link to={`/services/${item.service_id}`} key={item._id}>
         <div className="card" >
         {/* <img src={item.image} className="card-img-top" style={{height:'150px',width:'70%',marginLeft:'10%'}} /> */}
          <img src="https://i.ibb.co/WzwJF2c/img.jpg" alt="img"className="card-img-top"  />
          <div className="card-body shadow " >
           <span >{item.servicename}</span>
          </div>
        </div>
        </Link>
      </div>
        
        ))}
            
        </div>
    </div>
        </>
    )
}