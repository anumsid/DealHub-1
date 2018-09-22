import React from 'react'
import { Label } from 'semantic-ui-react'
import DealCardItem from '../../core/DealCardItem'

const DealCard = props => {
  const cardData = props.card ? (props.card) : {title: '', likes: '', image: '', description: '', location: '', category: '', expiration_date: ''}

  return (
    <div className='card mx-auto' style={{ width: '30rem' }}>
      <div style={{ textAlign: 'left' }}>
        <Label color='pink' style={{ display: 'inline-block' }}><i aria-hidden className='like icon' />{cardData.votes.length}</Label>
        <Label color='blue' className='ui label' style={{ display: 'inline-block' }}><i aria-hidden className='comment icon' />{cardData.comments.length}</Label>
      </div>
      <DealCardItem card={cardData} />
      <button className='btn btn-primary' onClick={() => { props.handleClick(props.card.id) }}>See Details</button>
    </div>
  )
}

export default DealCard
