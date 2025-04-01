import React from 'react';
// import Header from '../common/Header';
import Footer from '../common/Footer';

import {default as ProjectsNew} from '../common/Projects';

import Banner from '../common/Banner';

const Services = () => {
   
  return (

    <>
    <Banner 
        title="Projects" 
        breadcrumb="home / projects" 
      />
   <ProjectsNew/>
   <Footer />
    </>
 
  );
};

export default Services
