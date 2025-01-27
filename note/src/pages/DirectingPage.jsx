import React from "react";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';



const Directing = () => {

 useEffect(() => {
      // Set background color for body
      document.body.style.backgroundColor = '#1f628e';

  },
   []);
  
    return (
      <div 
      >
        <h1 className="mg">THE SPONSERSHIPS</h1>
      </div>
    );
  };
  
  export default Directing;