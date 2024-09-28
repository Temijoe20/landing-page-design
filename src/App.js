import React, { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css'
import Hero from'./components/Hero';
import Why from './components/Why';
import Trade from './components/Trade';
import Stats from './components/Stats';

const App = () => {
  useEffect(()=> {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });
  return (
    <div className='overflow-hidden'>
    <Hero />
    <Stats />
    <Why />
    <Trade />
    
  </div>
  );
};

export default App;
