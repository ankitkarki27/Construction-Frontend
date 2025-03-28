import React from 'react'
import Header from '../common/Header';
import Footer from '../common/Footer';
import {default as ContactNew} from '../common/Contact';
import Banner from '../common/Banner';
const Contact = () => {
    return (
        <>

    <Banner 
        title="Contact Us" 
        breadcrumb="home / contacts" 
      />

<ContactNew/>


      <Footer />
        </>
     
      );
    };

export default Contact
