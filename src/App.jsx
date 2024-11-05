import React from 'react'
import Navigation from './component/Navigation';
import CardImage from './component/CardImage';
//import Skills from './component/Skills';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const App = () => {
  return (
    
    <div>
      <div style={{ backgroundColor:`#8fbc8f`, minHeight: '100vh', color: 'white' }}>
      <Navigation /> 
      <CardImage />
     
    </div>
     </div>
      
  );
};
      
   
 

export default App
