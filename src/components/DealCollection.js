import React from 'react'
import DealCard from './components/DealCard'

const DealCollection = (props) =>  {
  const card = props.deals.map(deal => {
    return <DealCard key={deal.id} card={deal}/>
  })


    return(
      <div>
        {card}
      </div>
    )

}

export default DealCard;
