import React from'react';
import './index.css';
import "./About.css";
import {GoMarkGithub} from "react-icons/go";
import Navbar from './Navbar';
import Footer from './Footer';

function About() {
    return (
      <>
        <Navbar/>
        <React.Fragment>
          <br>
          </br>

          <h1>
            <strong>Welecome to App Name</strong>
          </h1> <br></br>

          <h2>
            This App will find any movie you desire
            ,think of it as spotify but for movies!!
          </h2>
          
          <div className="text">
        
          <div className="about">
        <div className="box-content h-32 w-32 p-4 border-4">
          <h1><strong>Danyal N</strong></h1>
          
          <p>
            working on about us page
          </p>  
        </div>

        
        <div className="box-content h-32 w-32 p-4 border-4 ...">
                <h1> <strong>Joel </strong></h1>
                <p>
                  working on home page
                </p>
               
            
                
        </div>
       
        <div className="box-content h-32 w-32 p-4 border-4 ...">
                <h1> <strong>Andy G</strong></h1>
                <p>
                  sign up page
                </p>
            
                
        </div>
        
        <div className="box-content h-32 w-32 p-4 border-4 ...">
                <h1> <strong>Firas A</strong></h1>
                <p>
                  working on footer
                </p>
            
                
        </div>
        
        <div className="box-content h-32 w-32 p-4 border-4 ...">
                <h1> <strong>Indrajeet P</strong></h1>
                <p>
                  log in page
                </p>
            
                
        </div>
      <div className='info'>
        
      </div >

      </div>
      <h1>
        
      </h1>

      </div>

      </React.Fragment>
      <Footer/>  
      </>

    
    
    );
  }
  
  export default About;
