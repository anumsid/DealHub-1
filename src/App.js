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

  // componentDidMount(){
  //   this.handleClick()
  // }

  handleClick = (e) => {
    console.log(e.target)
  }

  render() {
    //console.log(this.state)
    return (
      <div className="App">
        <Header onClick={this.handleClick}/>
        <DealCollection className="cardsList" deals={this.state.deals}/>
        <Footer className="footer"/>
      </div>
    );
  }
}

export default App;
