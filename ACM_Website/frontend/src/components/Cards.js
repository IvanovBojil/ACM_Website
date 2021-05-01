import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Website under construction!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/uta-acm-logo.jpg'
              text='News item goes here'
              label='News'
              path='/services'
            />
            <CardItem
              src='images/uta-acm-logo.jpg'
              text='News item goes here'
              label='News'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/uta-acm-logo.jpg'
              text='Event item'
              label='event'
              path='/services'
            />
            <CardItem
              src='images/uta-acm-logo.jpg'
              text='New resource material'
              label='Resource'
              path='/products'
            />
            <CardItem
              src='images/uta-acm-logo.jpg'
              text='About ACM@UTA'
              label='About'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
