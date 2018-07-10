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
      title: '',
      likes: ''
    }
  }

  componentDidUpdate(){
    if(this.props.card){
      this.setState({
        title: this.props.card.title,
        likes: this.props.card.total_votes
      })
    }
  }


  render(){
    //console.log(this.props.deals);
    const cardData = this.props.card ? (this.props.card) : {title: '', likes: '', image: '', description: '', location: '', category: '', expiration_date: ''}
    //console.log('props:', this.props.card, cardData)
    return(
      <div className="card" style={{width: '18rem'}}>
        <img className="card-img-top" src={cardData.image} alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">{cardData.title}</h5>
          <p className="card-text">{cardData.description}</p>
          <a href="#" className="btn btn-primary">See Details</a>
        </div>
      </div>
    )
  }
}


export default DealCard
