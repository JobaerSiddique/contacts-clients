import React from 'react';
import Navbar from '../../Pages/Shared/Navbar';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Main = () => {
    return (
        <div>
            <Helmet>
            <title>Neutron Ltd</title>
            </Helmet>
           <Navbar/>
           <div  className='container mx-auto'>
           <Outlet/> 
           </div>
        </div>
    );
};

export default Main;