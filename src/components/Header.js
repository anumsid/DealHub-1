import React from 'react'
import NewDealButton from './NewDealButton'
import CreateDealForm from './CreateDealForm'
import SearchDeals from './Search'

class Header extends React.Component {

  render(){

    return (
      <div className="fixed-top clearfix">

        <NewDealButton />

        <SearchDeals />

        <header className="App-header align-content-center">
          <h1 className="App-title">Welcome to DealHub</h1>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>


        <CreateDealForm />

      </div>
    )
  }
}

export default Header
