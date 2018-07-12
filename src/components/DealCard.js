// import React from 'react'
//
// class DealCard extends React.Component {
//   render(){
//
//     return(
//
//       // <Likes />
//       // <Comments />
//
//     )
//   }
// }

import React from 'react'
import Likes from './Likes'
import Comments from './Comments'
// import { Card, Icon, Image } from 'semantic-ui-react'





class DealCard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: this.props.card.title || '',
      likes: this.props.card.total_votes || '',
      comments: this.props.card.comments || ''
    }
  }

  // componentDidUpdate(){
  //   if(this.props.card){
  //     this.setState({
  //       title: this.props.card.title,
  //       likes: this.props.card.total_votes
  //     })
  //   }
  // }


  render(){
    // console.log(this.props.deals);
    const cardData = this.props.card ? (this.props.card) : {title: '', likes: '', image: '', description: '', location: '', category: '', expiration_date: ''}
    //console.log('props:', this.props.card, cardData)
    return(
      <div className="card" style={{width: '20rem'}}>
        <img className="card-img-top" src={cardData.image} alt="Card image cap"/>
        <div className="card-body">
          <h4 className="card-title">{cardData.title}</h4>
          <h5 className="card-title">@: {cardData.location}</h5>
          <h5 className="card-title">{cardData.category}</h5>
          <h5 className="card-expiration">Until: {cardData.expiration_date}</h5>
          <p className="card-text">{cardData.description}</p>
          <button className="btn btn-primary" onClick={() => {this.props.handleClick(this.props.card)}}>See Details</button>
        </div>
      </div>
    )
  }
}


export default DealCard
