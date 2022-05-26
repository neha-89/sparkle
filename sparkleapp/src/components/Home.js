import React from 'react';
import { Component } from 'react';
import DisplayServices from './DisplayServices';


const url = "https://sparklenodeapi.herokuapp.com/api/getAll";
class Home extends Component{
  constructor(){
    super()
    this.state ={
      serviceName :''
    }
  }
// const [services,setServices] = useState([]);

// useEffect(()=>{
//   fetch('https://sparklenodeapi.herokuapp.com/api/getAll')
//   .then((response) => response.json())
//   .then((data) => setServices(data));
   
// },[])
render(){
  return(
    <>
    
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
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
                <img src="https://i.ibb.co/xhNykKN/Wallpaperkiss-1212798.jpg" className="item" alt="..."/>
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
        <DisplayServices serviceData={this.state.serviceName} />
   <div className="container-fluid testimonial">
    <h2>Testimonials</h2>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner sal-slider1">
        <div className="carousel-item active s-item">
          <p>"mdhgjfghdffghfjg"</p>
          <h6>-ghgjhkjhk</h6>
        </div>
        <div className="carousel-item s-item">
          <p>"mdhgjfghdffghfjg"</p>
          <h6>-ghgjhkjhk</h6>
        </div>
        <div className="carousel-item s-item">
          <p>"mdhgjfghdffghfjg"</p>
          <h6>-ghgjhkjhk</h6>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
   </div>
   <div className="card mb-3">
    <div className="row g-0">
      <div className="col-md-4">
        <img src="https://i.ibb.co/86nHqyh/bridal.jpg" alt="bridal" className="bridal" />
      </div>
      <div className="col-md-8">
        <div className="card-body title">
          <h2 className="card-title ">The Bridal Look</h2>
          <p className="card-text b-text">
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
  //api calling
  componentDidMount(){
    fetch(url,{method:'GET'})
    .then((response)=>response.json())
    .then((data) =>console.log(data))
    .then((data)=>{
      this.setState({serviceName:data})
    })
   
  }      
}


export default Home