import React, { useState, useEffect } from 'react';

const Home = () => {
    return (
    <div id='Title'>Who am I?
      <div id='Summary'>
      I'm a software engineer with a passion for building impactful, high-quality products.
      I hold an MSc in Software Engineering with Distinction and bring a strong foundation in both software and biomedical engineering, paired with hands-on experience across the stack. 
      I've worked with technologies like Flask, .NET and React, and I’ve built everything from real-time AI tools to internal platforms that improve operations.
      <br/>
      <br/>
      I'm particularly interested in roles where I can continue growing as a software developer, whether that’s backend, frontend or full stack, and I'm excited by the opportunity to work on problems in finance, data or AI. 
      I'm fluent in English and French and thrive in fast-moving, collaborative environments where I can help build scalable, intelligent and user-focused solutions.
      </div>
        <br/>
          <img src='/Software_img.webp' alt='software engineer'/> {/*Get my image there*/}
        <br/>
    </div>
    );
  };
  
  export default Home;