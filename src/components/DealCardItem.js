import React from 'react'
import { withRouter } from 'react-router-dom'
import Comments from './Comments'

class DealCardItem extends React.Component {

  constructor(){
    super()

    this.state = {
      card: {}
    }
  }

  componentDidMount(){
    fetch(`http://localhost:3000/api/v1/deals/${this.props.match.params.id}`)
    .then(resp => resp.json())
    .then(card => this.setState({
      card: card
    }))
  }

  render(){
    console.log(this.props);
    console.log(this.props.match.params.id);

    const { card } = this.props

    return(
      <div>
        <div className="card mx-auto" style={{width: '40rem'}}>
          <img className="card-img-top" src={card.image} alt="Card image cap"/>
          <div className="card-body">
            <h4 className="card-title">{card.title}</h4>
            <h5 className="card-title">@: {card.location}</h5>
            <h5 className="card-title">{card.category}</h5>
            <h5 className="card-expiration">Until: {card.expiration_date}</h5>
            <p className="card-text">{card.description}</p>
          </div>
        </div>
        <Comments dealId={this.props.match.params.id}/>
      </div>
    )
  }
}

export default withRouter(DealCardItem)
