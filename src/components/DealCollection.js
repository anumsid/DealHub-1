// import React from 'react'
//
// class DealCollection extends React.Component {
//
//   render(){
//
//     return(
//
//       // <DealCard />
//
//     )
//   }
// }

import React from 'react'
import DealCard from './DealCard'
import { Card, Icon, Image } from 'semantic-ui-react'


const DealCollection = (props) =>  {
  const cards = props.deals.map(deal => {
    return <DealCard key={deal.id} card={deal}/>
  })
  //console.log(cards);

    return(
      <div className="card-columns">
        <div className="card-deck">
          <div className="cards">
            {cards}
          </div>
        </div>
      </div>
    )

}

export default DealCollection;
