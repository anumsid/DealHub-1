import React from 'react'
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'
import { userCredentials } from '../../../actions'
import { getErrorMessage } from '../../../selectors'

export class SignIn extends React.Component {
  constructor (props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.onClick = this.onClick.bind(this)
    this.state = {}
  }

  onChange (e) {
    const type = e.target.getAttribute('type')
    const newState = this.state
    newState[type] = e.target.value
    this.setState({ ...newState })
  }

  onClick () {
    this.state.email && this.state.password && this.props.onClick(this.state)
  }

  render () {
    return (
      <div className='signInPage'>
        <div>
          <h3 id='slogan'>Real deals crowdsourced by an awesome community </h3>
        </div>
        <br />
        <br />
        <br />
        <Form style={{width: '40rem'}} className='mx-auto'>
          <Form.Input fluid label='Enter email' type='email' placeholder='Email' onChange={this.onChange} />
          <Form.Input fluid label='Enter password' type='password' placeholder='Password' onChange={this.onChange} />
          <br />
          {
            this.props.errorMessage && <span style={{ color: 'red' }}>{this.props.errorMessage}</span>
          }
          <br />
          <Form.Button onClick={this.onClick}>Login</Form.Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  errorMessage: getErrorMessage(state)
})

const mapDispatchToProps = dispatch => ({
  onClick: user => dispatch(userCredentials(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
