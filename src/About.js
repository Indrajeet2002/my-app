import React from'react';
import './index.css';
import "./About.css";
import {GoMarkGithub} from "react-icons/go";
import Navbar from './Navbar';
import Footer from './Footer';
import {BsFillArrowRightCircleFill} from "react-icons/bs";
import { useState } from 'react';

function About() {
    return (
      <div className='w-screen max-w-full'>
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
        <Cards/>

        
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
      </div>

    
    
    );
  }

  const Cards = () => {
    //const [names, setNames] = useState(['Daniel Nemati','Firas Alshami','Joel','Andy','Indrajeet'])
    const [display, setDisplay] = useState([true, false, false, false, false]);
    const allCards = display.map((dis) => <Card display={dis}/>)
    function clicked(){
      let copy = display.slice(0);
      let index = copy.indexOf(true);
      copy.fill(false);
      if(index===copy.length-1)
      {
        copy[0] = true;
      }
      else
      {
        copy[index+1] = true;
      }
      copy.forEach(value => console.log(value));
      setDisplay(copy);
    }

    return(
      <div className='flex flex-col justify-start items-center'>
        <div className=''>
          {allCards}
        </div>
        <button onClick={clicked}>
          <BsFillArrowRightCircleFill/>
        </button>
      </div>
    );
  }
  
  const Card = (props) => {
    return(
      <div className={"box-content h-[45vh] w-[30vw] p-4 border-4 rounded-3xl from-blue-400 to-black via-gray-500 bg-gradient-to-br flex flex-col items-center justify-start absolute"+(props.display ? " animate-cardIn" : " animate-cardOut opacity-0")}>
        <h1 className='h-1/5'><strong>Danyal N</strong></h1>
        <p className='h-3/5'>
            working on about us page
        </p>
      </div>
    );
  }

  export default About;
