import React from 'react'
import { Form } from 'semantic-ui-react'
import { withRouter } from 'react-router'

class SignIn from React.Component {

  render(){
    return(
      <Form>
        <Form widths='4'>
          <Form.Input fluid label='Enter email' type="email" placeholder='Email' />
          <Form.Input fluid label='Enter password' type="password" placeholder='Password' />
        </Form>
        <Form.Button>login</Form.Button>
      </Form>
    )
  }
}

export default SignIn
