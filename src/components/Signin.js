import React from 'react'
import { Form } from 'semantic-ui-react'
import { withRouter } from 'react-router'

class SignIn extends React.Component {

  render(){
    return(
      <div className="signInPage">
        <div>
          {/* <h1 id="welcome">DealHub</h1> */}
          <h3 id="slogan">Real deals crowdsourced by an awesome community </h3>
        </div>
        <br /><br /><br />
        <Form>
          <Form style={{width: '40rem'}} className="mx-auto">
            <Form.Input fluid label='Enter email' type="email" placeholder='Email' />
            <Form.Input fluid label='Enter password' type="password" placeholder='Password' />
          </Form>
          <br /><br />
          <Form.Button>login</Form.Button>
        </Form>
      </div>
    )
  }
}

export default SignIn
