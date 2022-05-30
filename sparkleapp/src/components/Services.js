import React,{useState ,useEffect} from 'react';




export default function Services(){
    const params = useParams();
    const [service,setService] = useState([]);

    useEffect(()=>{
        fetch(('https://sparklenodeapi.herokuapp.com/api/getAll'))
        .then((res)=>res.json())
        .then((data)=>setService(data))
    },[])
  
    return(
        <>
          <h1></h1>
        </>
    )
}