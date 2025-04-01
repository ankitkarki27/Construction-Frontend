import React from 'react';

import Footer from '../common/Footer';

import {default as ServicesNew} from '../common/Services';

import Banner from '../common/Banner';

const Services = () => {
   
  return (

    <>
    <Banner 
        title="Servcices" 
        breadcrumb="home / services" 
      />
   <ServicesNew/>
   <Footer />
    </>
 
  );
};

export default Services
