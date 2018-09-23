import React from 'react'

export const DealCardItem = ({ card }) => (
  <React.Fragment>
    <img className='card-img-top' src={card.image} alt='Card cap' />
    <div className='card-body'>
      <h4 className='card-title'>{card.title}</h4>
      <h5 className='card-title'>@: {card.location}</h5>
      <h5 className='card-title'>{card.category}</h5>
      <h5 className='card-expiration'>Until: {card.expiration_date}</h5>
      <p className='card-text'>{card.description}</p>
    </div>
  </React.Fragment>
)

export default DealCardItem
