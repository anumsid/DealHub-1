import React from 'react'
import { connect } from 'react-redux'
import Header from './components/core/Header'
import FooterNav from './components/core/Footer'
import DealCollection from './components/app/DealCollection'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import CreateDealForm from './components/app/CreateDeal'
import DealCardDetails from './components/app/DealDetails'
import SignIn from './components/app/Login'
import SignUp from './components/app/Register'
import { getAuthToken } from './selectors'
import './App.css'

const PrivateRoute = ({ auth, component: Component }) => {
  if (auth) {
    return <Component />
  }
  return <Redirect to='/login' />
}

const NoAuthRoute = ({ auth, component: Component }) => {
  if (!auth) {
    return <Component />
  }
  return <Redirect to='/' />
}

const App = ({ auth }) => (
  <div className='App'>
    <Header />
    <Switch>
      <Route exact path='/' component={DealCollection} />
      <NoAuthRoute exact path='/login' component={SignIn} auth={auth} />
      <NoAuthRoute exact path='/signup' component={SignUp} auth={auth} />
      <Route exact path='/deals/:id' component={DealCardDetails} />
      <PrivateRoute exact path='/add' component={CreateDealForm} auth={auth} />
    </Switch>
    <FooterNav className='footer' />
  </div>
)

const mapStateToProps = state => ({
  auth: getAuthToken(state)
})

export default withRouter(connect(mapStateToProps)(App))
