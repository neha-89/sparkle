import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Services from './Services';
import Contact from './Contact';


const Routing = () => {
    return(
        <BrowserRouter>
            
                <Routes>
                    <Route path="/" element={<Header/>}>
                        <Route path="home" element={<Home/>}/>
                        <Route path="services" element={<Services/>}/>
                        <Route path="contact" element={<Contact/>}/>
                        <Route path="*" 
                        element={
                            <main>
                                <p>This is nothing on this route</p>
                            </main>
                        }
                        />
                    </Route>
                </Routes>
          
        </BrowserRouter>
    )
}

export default Routing