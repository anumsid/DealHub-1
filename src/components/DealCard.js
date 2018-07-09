import React from 'react'
import Likes from './components/Likes'
import Comments from './components/Comments'
class DealCard extends React.Component {
  constructor(props){
    super(props)
    const {title, total_votes, location, expiration_date, image, category, description}
     = this.props.card
    state = {
      title: title,
      likes: total_votes,
    }
  }
  render(){
    const {}
    return(
      <div>
        <h1>{title}</h1>
        <img src={image} alt="image not loaded"/>
        <p>{category}</p>
        <h2>{location}</h2>
        <p>{expiration_date}</p>
        <p>{description}</p>
        {/*  <Likes />
        <Comments /> */}

      </div>
    )
  }
}
export default DealCard
