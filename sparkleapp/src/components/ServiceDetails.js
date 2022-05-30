// import React,{useState ,useEffect} from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router';


// export default function ServiceDetails(){
//     const params = useParams();
//     const [data ,setData] = useState([]);


//     useEffect(()=>{
//         axios.get(`https://sparklenodeapi.herokuapp.com/api/subservice/service_id/${params.service_id}}`)
//         .then((res)=>{res.json})
//         .then((data) =>console.log(data))
//         .then((data)=> setData(data))
//     },[params.service_id])

//     return(
//         <>
//           <h1></h1>
//         </>
//     )
// }