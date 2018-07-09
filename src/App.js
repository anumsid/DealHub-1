import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import DealCollection from './components/DealCollection'

class App extends Component {
  constructor(){
    super()

    state = {
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


  render() {
    return (
      <div className="App">
        <Header />

        {<DealCard deals={this.state.deals}/>}

        <Footer />
      </div>
    );
  }
}

export default App;
