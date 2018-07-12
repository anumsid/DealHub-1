import React from 'react'
import NewDealButton from './NewDealButton'
import CreateDealForm from './CreateDealForm'
import Search from './Search'
import { Link } from 'react-router-dom'
// import { withRouter } from 'react-router'

// class Header extends React.Component {
//   constructor(props){
//     super(props)
//   }
//   render(){
//     console.log(props)
//     return (
//       <div className="fixed-top clearfix">
//
//         {/* <NewDealButton /> */}
//         <button secondary="true" className="page-footer new-deal-button" onClick={props.onClick}>
//           Add New Deal
//         </button>
//
//         <SearchDeals />
//
//         <header className="App-header align-content-center">
//           <h1 className="App-title">Welcome to DealHub</h1>
//           {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         </header>
//
//       </div>
//     )
//   }
// }
//
// export default Header

const Header = (props) => {
  // console.log(props)
  return(
    <div className="fixed-top">
      <Link to="/add">
        <button secondary="true" className="page-footer new-deal-button">
         Add New Deal
        </button>
      </Link>

     <Search />

     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
        <a className="nav-item nav-link" href="#">Logout</a>
      </div>
    </div>

     <header className="App-header align-content-center">
       <h1 className="App-title">Welcome to DealHub</h1>
       {/* <img src={logo} className="App-logo" alt="logo" /> */}
     </header>

    </div>
  )
}

export default Header
