import React from 'react'
import NewDealButton from './NewDealButton'
import CreateDealForm from './CreateDealForm'
import SearchDeals from './Search'

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
  console.log(props)
  return(
    <div>
      <button secondary="true" className="page-footer new-deal-button" onClick={props.onClick}>
       Add New Deal
     </button>

     <SearchDeals />

     <header className="App-header align-content-center">
       <h1 className="App-title">Welcome to DealHub</h1>
       {/* <img src={logo} className="App-logo" alt="logo" /> */}
     </header>
    </div>
  )
}

export default Header
