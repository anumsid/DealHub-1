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
      <container className="d-flex justify-content-between">
        <div className="row align-content-center">
          <div className="card" style={{width: '40rem'}}>
            <img className="card-img-top" src={card.image} alt="Card image cap"/>
            <div className="card-body">
              <h4 className="card-title">{card.title}</h4>
              <h5 className="card-title">@: {card.location}</h5>
              <h5 className="card-title">{card.category}</h5>
              <h5 className="card-expiration">Until: {card.expiration_date}</h5>
              <p className="card-text">{card.description}</p>
            </div>
          </div>
        </div>
        <Comments dealId={this.props.match.params.id}/>
      </container>
    )
  }
}

export default withRouter(DealCardItem)
