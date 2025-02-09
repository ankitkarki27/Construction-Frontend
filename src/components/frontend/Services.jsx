import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';

import {default as ServicesNew} from '../common/Services';
import Banner from '../common/Banner';

const Services = () => {
   
  return (

    <>
    <Banner 
        title="Blogs & Articles" 
        breadcrumb="home / blogs" 
      />


   <ServicesNew/>
   <Footer />
    </>
 
  );
};

export default Services
