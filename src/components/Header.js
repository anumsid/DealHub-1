import React from 'react'

class Header extends React.Component {

  render(){
    
    return (
      <div>
        <header className="App-header fixed-top">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to DealHub</h1>
        </header>

        {/* <Search /> */}
        {/* <CreateDealForm /> */}

      </div>
    )
  }
}

export default Header
