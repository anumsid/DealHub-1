import React from 'react'
import { Form } from 'semantic-ui-react'

class CreateDealForm extends React.Component {
    constructor() {
    super()

    this.state = {
      title: '',
      location: '',
      expiration: '',
      image: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const newDeal = {
      title: this.state.title,
      location: this.state.location,
      expiration: this.state.expiration,
      image: this.state.image
      }
    }

    // fetch(, {
    //   method: 'POST',
    //   headers: {
    //     'content-type':'application/json'
    //   },
    //   body: JSON.stringify(newDeal),
    // })
    //   .then(resp => resp.json())
    //   .then(resp => this.props.newpokemon(resp))
    //
    //    e.target.reset()
    // }

  handleName = (e) => {
    console.log(e.target.value);
    this.setState({
      name: e.target.value
    })
  }

  handleHp = (e) => {
    console.log(e.target.value);
    this.setState({
      hp: e.target.value
    })
  }

  handleFrontUrl = (e) => {
    console.log(e.target.value);
    this.setState({
      frontUrl: e.target.value
    })
  }

  handleBackUrl = (e) => {
    console.log(e.target.value);
    this.setState({
      backUrl: e.target.value
    })
  }

  render(){

    return(
      <div>
        <br />
        <h3>Add New Deal</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="title" placeholder="title" name="title" onChange={this.handleName}/>
            <Form.Input fluid label="location" placeholder="location" name="location" onChange={this.handleHp}/>
            <Form.Input fluid label="expiration" placeholder="expiration" name="expiration" onChange={this.handleFrontUrl}/>
            <Form.Input fluid label="image [OPTIONAL]" placeholder="url" name="image" onChange={this.handleBackUrl}/>
          </Form.Group>
          <br />
          <Form.Button>Submit Deal</Form.Button>
        </Form>
      </div>
    )
  }
}

export default CreateDealForm
