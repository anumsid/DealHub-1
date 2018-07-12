// import React, { Component } from 'react';
// // import logo from './logo.svg';
// import './App.css';
// import Header from './components/Header'
// import Footer from './components/Footer'
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Header />
//
//         {/* <DealCollection /> */}
//
//         <Footer />
//       </div>
//     );
//   }
// }
//
// export default App;

import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import FooterNav from './components/Footer'
import DealCollection from './components/DealCollection'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Switch, withRouter } from 'react-router-dom'
import DealCard from './components/DealCard'
import CreateDealForm from './components/CreateDealForm'
import DealCardItem from './components/DealCardItem'
import Comments from './components/Comments'
import SignIn from './components/SignIn'

class App extends Component {
  constructor(){
    super()

    this.state = {
      deals: [],
      searchTerm: '',
      currentDeal : {}
    }
  }

  componentDidMount(){
    this.fetchCards()
  }

  fetchCards = () => {
    fetch(`http://localhost:3000/api/v1/deals`)
    .then(res => res.json())
    .then(deals => this.setState({
      deals
    }))
  }

  updateDeals = (newDeal) => {
    // console.log(newDeal);
    this.setState({
      deals: [...this.state.deals, newDeal]
    })
  }


  dealInfo = (card) => {
    // const id = card.id
    this.setState({
      currentDeal: card
    }, () => {
        this.props.history.push(`/deals/${card.id}`)
    })
  }

  handleChange = (e) => {
  // console.log(this);
  console.log(e.target.value);
  this.setState({
    searchTerm: e.target.value.toLowerCase()
    })
  }

filteredDeals = () => {
  return this.state.deals.filter(deal => {
    return deal.category.toLowerCase().includes(this.state.searchTerm) || deal.title.toLowerCase().includes(this.state.searchTerm)
    // || deal.description.toLowerCase().includes(this.state.searchTerm)
  })
}


  render() {
    console.log(this.props)
    return (
      <div className="App">

        {/* <Router>
          <div> */}
            <Header onChange={this.handleChange}/>
            <Switch>

              <Route exact path="/login" component={SignIn}/>

              <Route exact path="/deals" render={() => <DealCollection className="cardsList" deals={this.filteredDeals()} handleClick={this.dealInfo} />} />

              {/* <Route exact path="/deal" render={() => <DealCard card={this.state.currentDeal} />} /> */}

              <Route exact path="/deals/:id" render={() => <DealCardItem card={this.state.currentDeal} />} />

              <Route exact path="/deals/:id/comments" render={() => <Comments className="comments" sendCard={this.dealInfo} />} />


              <Route exact path="/add" render={() => <CreateDealForm createDeal={this.updateDeals} />} />



            </Switch>
            <FooterNav className="footer"/>
          {/* </div>
        </Router> */}

      </div>

    );
  }
}

export default withRouter(App);
