import React from 'react';
import Navigation from '../Componets/Navigation';
import Footer from '../Componets/Footer';

const About = () => {
    return(
        <>

        <Navigation/>
        
        <div className="container">
        <h1>About This Application</h1>
        <p>Nama: Mulumbot, Favian Joshua</p>
        <p>NIM: 105011910030</p>
        <p>Program Studi: Sistem Informasi (SI)</p>
        </div>
        
        <Footer/>


        </>
    );
}


export default About;