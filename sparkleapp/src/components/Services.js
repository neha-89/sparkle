// import React from 'react';
// import { Component } from 'react';

// class Services extends Component(){
//     constructor(){
//         super()
//         this.state = {
//             item :[],
//             DataisLoaded: false
//         }
//     }
//     componentDidMount() {
//     fetch(`https://sparklenodeapi.herokuapp.com/api/subservice/service_id/${service_id}`)
//       .then((res) => res.json())
//       .then((json) => {
//         this.setState({
//           items: json,
//           DataisLoaded: true
//         });
//       });
//   }
//     render(){
//         const { DataisLoaded, items } = this.state;
//             if (!DataisLoaded)
//                 return (
//                 <div>
//                     <h1> Pleses wait some time.... </h1>{" "}
//                 </div>
//                 );
//         return(
//             <>
//             </>
//         )
//     }
// }
// export default  Services