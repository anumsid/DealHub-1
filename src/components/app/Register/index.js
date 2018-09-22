import React from 'react'
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'
import { registerUser } from '../../../actions'
import { getErrorMessage } from '../../../selectors'

export class SignUp extends React.Component {
  constructor (props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.onClick = this.onClick.bind(this)
    this.state = {}
  }

  onChange (e) {
    const type = e.target.id
    const newState = this.state
    if (type === 'gender') newState[type] = e.target.innerText
    else newState[type] = e.target.value
    this.setState({ ...newState })
  }

  onClick () {
    this.state.name &&
    this.state.age &&
    this.state.gender &&
    this.state.city &&
    this.state.email &&
    this.state.password &&
    this.props.onClick(this.state)
  }

  render () {
    const options = [
      { key: 'm', text: 'Male', value: 'male' },
      { key: 'f', text: 'Female', value: 'female' }
    ]

    return (
      <Form style={{ width: '40rem', marginTop: 100 }} className='mx-auto'>
        <Form.Input fluid label='Name' placeholder='First, last' id='name' onChange={this.onChange} />
        <Form.Input fluid label='Age' placeholder='Age' id='age' onChange={this.onChange} />
        <Form.Select fluid label='Gender' options={options} placeholder='Gender' id='gender' onChange={this.onChange} />
        <Form.Input fluid label='City' placeholder='City' id='city' onChange={this.onChange} />
        <Form.Input fluid label='Email' type='email' placeholder='Email' id='email' onChange={this.onChange} />
        <Form.Input fluid label='Password' type='password' placeholder='Password' id='password' onChange={this.onChange} />
        {
          this.props.errorMessage && <span style={{ color: 'red' }}>{this.props.errorMessage}</span>
        }
        <Form.Button onClick={() => { this.props.onClick(this.state) }}>Signup</Form.Button>
      </Form>
    )
  }
}

const mapStateToProps = state => ({
  errorMessage: getErrorMessage(state)
})

const mapDispatchToProps = dispatch => ({
  onClick: user => dispatch(registerUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
