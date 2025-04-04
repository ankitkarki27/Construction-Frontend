import React from 'react';
// import Header from '../common/Header';
import Footer from '../common/Footer';

import {default as BlogsNew} from '../common/Blogs';

import Banner from '../common/Banner';

const Services = () => {
   
  return (

    <>
    <Banner 
        title="Blogs" 
        breadcrumb="home / blogs" 
      />
   <BlogsNew/>
   <Footer />
    </>
 
  );
};

export default Services
