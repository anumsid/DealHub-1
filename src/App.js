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
import Footer from './components/Footer'
import DealCollection from './components/DealCollection'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import DealCard from './components/DealCard'
import CreateDealForm from './components/CreateDealForm'

class App extends Component {
  constructor(){
    super()

    this.state = {
      deals: [],
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
    console.log(newDeal);
    this.setState({
      deals: [...this.state.deals, newDeal]
    })
  }


  render() {
    console.log(this.state.deals)
    return (
      <div className="App">

        {/* <Router>
          <div> */}
            <Header onClick={this.handleClick}/>
            <Switch>
              <Route exact path="/" render={() => <DealCollection className="cardsList" deals={this.state.deals} />} />
              <Route exact path="/deal" component={DealCard} />
              <Route exact path="/add" render={() => <CreateDealForm createDeal={this.updateDeals} />} />
            </Switch>
            <Footer className="footer"/>
          {/* </div>    
        </Router> */}

      </div>

    );
  }
}

export default App;
