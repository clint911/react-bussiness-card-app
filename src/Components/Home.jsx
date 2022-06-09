import React from 'react';
import ReactDom from 'react-dom/client';

const imageVar = require('../Images/girl-cute.png');
const imageAlt = "Fucking Image you retard";
export default function Home() {
    return (
        <div className="Home-Image">
  <img className="large" src={imageVar} title={imageVar} alt={imageAlt}/>
</div>
    );
}