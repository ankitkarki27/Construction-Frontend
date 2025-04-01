import React from 'react';
// import Header from '../common/Header';
import Footer from '../common/Footer';

import {default as ServicesNew} from '../common/Services';
import {default as BlogsNew} from '../common/Blogs';

import Banner from '../common/Banner';

const Services = () => {
   
  return (

    <>
    <Banner 
        title="Blogs" 
        breadcrumb="home / blogs" 
      />
   <ServicesNew/>
   <Footer />
    </>
 
  );
};

export default Services
