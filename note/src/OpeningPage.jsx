// src/OpeningPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';



const Home = () => {
    const navigate = useNavigate();  
  
    const handleClick = () => {
      navigate('/Directing');  
    };

    
    useEffect(() => {
      // Set background color for body
      document.body.style.backgroundColor = '#1f628e';

      // Prevent scrolling and ensure the body and html occupy full height
      document.documentElement.style.height = '100%';
      document.body.style.height = '100%';
      document.body.style.overflow = 'hidden'; // Prevent scrolling
  }, []);

  return (
      <div style={{
          display: 'flex', // Flexbox container for left and right sections
          width: '100%',
          height: '100vh', // Full viewport height
      }}>

          {/* Text Section (Left Side) */}
          <div style={{
              width: '50%', 
              display: 'flex',
              flexDirection: 'column',
              paddingTop:'150px', 
              alignItems: 'flex-start', 
              paddingLeft: '20px',  
          }}>
              <h2 style={{ fontSize: '60px', fontFamily: 'Roca One', color: 'white' }}>SI- CLINICA</h2>
              <p style={{fontFamily:'Roca One',fontSize: '16px', color: '#bad6fd' }}>MANAGE YOUR HEALTH</p>
              <button 
                  onClick={handleClick}
                  style={{
                    color:'#92cedc',
                    
                  }}
              >
                  Click to start
              </button>
          </div>

         
          <div style={{
              width: '50%', 
              height: '100vh', 
              overflow: 'hidden', 
          }}>
              <img 
                  src="./public/home.jpeg" 
                  alt="SI-CLINICA"
                  style={{
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover', 
                  }} 
              />
          </div>
      </div>
  );
};


export default Home;
