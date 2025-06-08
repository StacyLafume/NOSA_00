import React, { useState, useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import PastExhb from './pages/PastExhb';




const NotTakingSubmissions = ({setShowNotTakingSubmissions}) => {
 
    return (
       
        <div id='/' style={{display: "flex",height: "100vh", backgroundColor: "#e55f1a",justifyContent: "space-evenly",
        alignItems: "center",}}>
        
            <p>  .</p>
            <button
                          style={{
                            padding: "0.5rem",
                            width: "100%",
                            fontSize: "1.5rem",
                            color: "white",
                            marginTop: "1rem",
                            marginBottom: "-0.5rem",
                          
                            backgroundColor: "black",
                          }}
                          onClick={() => setShowNotTakingSubmissions(false)}
                        >
                         Sorry, this page is not active yet! Please check back at a later time...
                         <br/> Click here to go back to NOSA
                        </button>


        </div>
   
    )
}

export default NotTakingSubmissions