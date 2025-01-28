import React from "react";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import "./DirectingPage.css";


const Directing = () => {

 useEffect(() => {
      // Set background color for body
      document.body.style.backgroundColor = '#1f628e';

  },
   []);
   return (
    <div className="container">
      <div className="box col-4">
      <h1>SPONSORSHIP 1</h1>
          <img src="/public/klinik2sayfa.PNG" alt=""/>    
              <div className="button-group">
          <button>+</button>
        </div>
      </div>
      <div className="box col-4">
      <h1>SPONSORSHIP 2</h1>
      <img src="/public/klinik2sayfa.PNG" alt=""/>    
              <div className="button-group">
          <button>+</button>
        </div>
      </div>
      <div className="box col-4">
      <h1>SPONSORSHIP 3</h1>
      <img src="/public/klinik2sayfa.PNG" alt=""/>    
              <div className="button-group">
          <button>+</button>
        </div>
      </div>
    </div>
  );
  };
  
  export default Directing;