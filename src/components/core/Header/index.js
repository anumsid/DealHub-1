import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import NewDealButton from '../NewDealButton'
import Search from '../Search'
import { getAuthToken } from '../../../selectors'
import { logout } from '../../../actions'

const Header = props => {
  return (
    <div className='fixed-top'>
      {
        props.authToken && <NewDealButton />
      }
      {
         props.location.pathname.replace('/', '') === '' && <Search />
      }
      <div className='navbar-collapse' id='navbarNavAltMarkup'>
        <div className='navItems'>
          <Link className='linkItem text-light' to='/'>Home</Link>
          {
            props.authToken ? <Link to='#' className='linkItem text-light' onClick={props.logout}>Logout</Link> : <React.Fragment><Link className='linkItem text-light' to='/login'>Login</Link><Link className='linkItem text-light' to='/signup'>Sign Up</Link></React.Fragment>
          }
        </div>
      </div>
      <header className='App-header align-content-center'>
        <h1 className='App-title'>Welcome to DealHub</h1>
      </header>
    </div>
  )
}

const mapStateToProps = state => ({
  authToken: getAuthToken(state)
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))
