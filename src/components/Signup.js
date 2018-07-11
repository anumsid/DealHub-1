import React from 'react'
import { Form } from 'semantic-ui-react'
import { withRouter } from 'react-router'

class SignUp from React.Component {

  render(){
    const options = [
      { key: 'm', text: 'Male', value: 'male' },
      { key: 'f', text: 'Female', value: 'female' },
    ]

    return(
      <Form>
        <Form widths='4'>
          <Form.Input fluid label='Name' placeholder='First, last' />
          <Form.Input fluid label='Age' placeholder='Age' />
          <Form.Select fluid label='Gender' options={options} placeholder='Gender' />
          <Form.Input fluid label='City' placeholder='City' />
          <Form.Input fluid label='Email' type="email" placeholder='Email' />
          <Form.Input fluid label='Password' type="password" placeholder='Password' />
        </Form>
        <Form.Button>Signup</Form.Button>
      </Form>
    )
  }
}

export default SignUp
