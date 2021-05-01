import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video controls autoPlay muted loop>
        <source src="videos/UTA_Profile_Dron_2020.mp4" type="video/mp4" />
      </video>
      <h1>Welcome to ACM@UTA</h1>
      <p>Be a part of the change</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          SignUp@ACM
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          About US <i className='far fa-play-circle' />
        </Button>
        
      </div>
    </div>
  );
}

export default HeroSection;
