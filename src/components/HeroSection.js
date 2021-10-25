import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>Desarrollo Web</h1>
      <p>Obtené más y mejores recursos. Expandí tu negocio, tu mundo.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          SABER MÁS
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
